import asyncHandler from "express-async-handler";
import Chat from "../models/chatModel.js";
import Message from "../models/messageModel.js";

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

export { chatOneOnOne };
