import asyncHandler from "express-async-handler";
import Chat from "../models/chatModel.js";
import Message from "../models/messageModel.js";

/**
 * @desc    Chat with user (ONE ON ONE)
 * @route   POST api/chats/:id
 * @access  Private
 */
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
      await existingChat.save(); // ✅ Save the chat first
    }

    // Create and save the message with chatId
    const newMessage = new Message({
      senderId,
      receiverId,
      chatId: existingChat._id, // ✅ Link the message to the chat
      message,
    });
    await newMessage.save();

    // Add message to chat
    existingChat.chats.push(newMessage._id);
    await existingChat.save();

    return res.status(201).json(newMessage);
    console.log(res.data);
    
  } catch (err) {
    console.error("Error in chatOneOnOne:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

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
//       await existingChat.save(); // ✅ Save the chat first
//     }

//     // Create and save the message with chatId
//     const newMessage = new Message({
//       senderId,
//       receiverId,
//       chatId: existingChat._id,  // ✅ Link the message to the chat
//       message,
//     });
//     await newMessage.save();

//     // Add message to chat
//     existingChat.chats.push(newMessage._id);
//     await existingChat.save();

//     return res.status(201).json(newMessage);
//   } catch (err) {
//     console.error("Error in chatOneOnOne:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

/**
 * @desc   Show chats (or create a new chat if it doesn’t exist)
 * @route  GET api/chats/:id
 * @access Private
 */
const getMessage = asyncHandler(async (req, res) => {
  try {
    const senderId = req.user._id;
    const receiverId = req.params.id; 

    let existingChat = await Chat.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (!existingChat) {
      return res.status(200).json([]); // ✅ No chat found, return empty array
    }

    // Fetch messages only for this chat
    const messages = await Message.find({ chatId: existingChat._id }).sort({
      createdAt: 1,
    });

    return res.status(200).json(messages);
  } catch (err) {
    console.error("Error in getMessage:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// const getMessage = asyncHandler(async (req, res) => {
//   try {
//     const receiverId = req.params.id;
//     const senderId = req.user._id;

//     let existingChat = await Chat.findOne({
//       members: { $all: [senderId, receiverId] },
//     }).populate("chats");

//     if (!existingChat) {
//       return res.status(200).json([]); // Instead of creating a new chat, return an empty array
//     }

//     return res.status(200).json(existingChat.chats);
//   } catch (err) {
//     console.error("Error in getMessage:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

export { chatOneOnOne, getMessage };
