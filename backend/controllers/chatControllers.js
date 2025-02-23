import asyncHandler from "express-async-handler";
import Chat from "../models/chatModel.js";
import Message from "../models/messageModel.js";

/**
 * @desc    Chat with user (ONE ON ONE)
 * @route   POST api/chats/:id
 * @access  Private
 */
// const chatOneOnOne = asyncHandler(async (req, res) => {
//   try {
//     const senderId = req.user._id;
//     const receiverId = req.params.id;
//     const { message } = req.body;

//     let existingChat = await Chat.findOne({
//       members: { $all: [senderId, receiverId] },
//     });

//     // If no chat exists, create a new one
//     if (!existingChat) {
//       existingChat = new Chat({
//         members: [senderId, receiverId],
//         chats: [],
//       });
//       await existingChat.save(); // Save the chat first
//     }

//     // Create and save the message
//     const newMessage = new Message({
//       senderId,
//       receiverId,
//       message,
//     });
//     await newMessage.save(); // Ensure message is created before adding to chat

//     existingChat.chats.push(newMessage._id);
//     await existingChat.save();

//     return res.status(201).json({
//       message: "Message sent successfully",
//       chatId: existingChat._id,
//     });
//   } catch (err) {
//     console.error("Error in chatOneOnOne:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

const chatOneOnOne = asyncHandler(async (req, res) => {
  try {
    const senderId = req.user._id;
    const receiverId = req.params.id;
    const { message } = req.body;

    let existingChat = await Chat.findOne({
      members: { $all: [senderId, receiverId] },
    });

    // If no chat exists, create a new one
    if (!existingChat) {
      existingChat = new Chat({
        members: [senderId, receiverId],
        chats: [],
      });
      await existingChat.save(); // Save the chat first
    }

    // Create and save the message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    await newMessage.save(); // Ensure message is created before adding to chat

    existingChat.chats.push(newMessage._id);
    await existingChat.save();

    return res.status(201).json(newMessage); // ✅ Send the actual message
  } catch (err) {
    console.error("Error in chatOneOnOne:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * @desc   Show chats (or create a new chat if it doesn’t exist)
 * @route  GET api/chats/:id
 * @access Private
 */
const getMessage = asyncHandler(async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.user._id;

    let existingChat = await Chat.findOne({
      members: { $all: [senderId, receiverId] },
    }).populate("chats");

    if (!existingChat) {
      return res.status(200).json([]); // Instead of creating a new chat, return an empty array
    }

    return res.status(200).json(existingChat.chats);
  } catch (err) {
    console.error("Error in getMessage:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export { chatOneOnOne, getMessage };
