import asyncHandler from "express-async-handler";
import Chat from "../models/chatModel.js";
import Message from "../models/messageModel.js";

/**
 *@desc     Create Chat
 *@route    POST /api/chat
 *@access   private*/
const createChat = asyncHandler(async (req, res) => {
  const { firstId, secondId } = req.body;

  try {
    const chat = await Chat.findOne({
      members: { $all: [firstId, secondId] },
    });

    if (chat) {
      res.status(201);
      res.json(chat);
    } else {
      const newChat = await Chat.create({ members: [firstId, secondId] });

      if (newChat) {
        const messages = await Message.create({ chatId: newChat._id });

        if (messages) {
          await messages.Chats.push({
            type: "info",
            text: "You can start your chat",
          });
          await messages.save();
        } else {
          res.status(501);
          throw new Error("Message was not created");
        }
        res.json({ newChat: true });
      }
    }
  } catch (err) {
    res.status(500);
    throw new Error("Internal server Error", err);
  }
});

/**
 * @desc    Chat with user(ONE ON ONE)
 * @route   GET api/chat/user_id
 * @access  private*/
const chatOneOnOne = asyncHandler(async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;

    let existingChat = await Chat.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (!existingChat) {
      existingChat = await Chat.create({
        members: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      existingChat.messages.push(newMessage._id);
    }

    await Promise.all([existingChat.save(), newMessage.save()]);

    return res.status(201).json({
      message: "Message send successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

export { createChat, chatOneOnOne };
