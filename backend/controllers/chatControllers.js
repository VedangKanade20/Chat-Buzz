// const getUserChat = asyncHandler(async (req, res) => {
//   const userId = req.params.userId; // Assuming userId is passed as a URL parameter

//   const chats = await chats.find({ user: userId }); // Fetching chats for the specific user

//   if (chats.length > 0) {
//     res.json(chats);
//   } else {
//     res.status(404);
//     throw new Error("Chats not found for the user");
//   }
// });

// export { getUserChat };

import asyncHandler from "express-async-handler";
import { Chat } from "../models/chatModel.js";
import { Message } from "../models/messageModel.js";

//create chat
//getUser chat
//find chat

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

export default { createChat };
