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

    console.log("Request received");
    console.log("Sender ID:", senderId);
    console.log("Receiver ID:", receiverId);

    let existingChat = await Chat.findOne({
      members: { $all: [senderId, receiverId] },
    });

    // If no chat exists, create a new one
    if (!existingChat) {
      existingChat = await Chat.create({
        members: [senderId, receiverId],
        chats: [],
      });
    }

    // Create and add a new message to the chat
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    existingChat.chats.push(newMessage._id);
    await existingChat.save();
    await newMessage.save();

    console.log("New Message Created:", newMessage); // ✅ Log new message
    console.log("Updated Chat:", existingChat); // ✅ Log updated chat

    return res.status(201).json({
      message: "Message sent successfully",
      chatId: existingChat._id,
    });
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
      existingChat = await Chat.create({
        members: [senderId, receiverId],
        chats: [],
      });
    }

    console.log("Fetched messages:", existingChat.chats);
    return res.status(200).json(existingChat.chats);
  } catch (err) {
    console.error("Error in getMessage:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export { chatOneOnOne, getMessage };

// import asyncHandler from "express-async-handler";
// import Chat from "../models/chatModel.js";
// import Message from "../models/messageModel.js";

// /**
//  * @desc    Chat with user(ONE ON ONE)
//  * @route   POST api/chats/:id
//  * @access  Private
//  */
// const chatOneOnOne = asyncHandler(async (req, res) => {
//   try {
//     const senderId = req.user._id;
//     const receiverId = req.params.id;
//     const { message } = req.body;
//     // console.log("Request received");
//     // console.log("Sender ID:", req.user._id);
//     // console.log("Receiver ID:", req.params.id);

//     let existingChat = await Chat.findOne({
//       members: { $all: [senderId, receiverId] },
//     });

//     if (!existingChat) {
//       existingChat = await Chat.create({
//         members: [senderId, receiverId],
//       });
//     }

//     const newMessage = await Message.create({
//       senderId,
//       receiverId,
//       message,
//     });

//     if (newMessage) {
//       existingChat.messages.push(newMessage._id);
//       await existingChat.save();
//     }

//     return res.status(201).json({
//       message: "Message sent successfully",
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// /**
//  * @desc   Show chats
//  * @route  GET api/chats/:id
//  * @access Private
//  */
// const getMessage = asyncHandler(async (req, res) => {
//   try {
//     const receiverId = req.params.id; // Ensure your route is defined as /api/chats/:id
//     const senderId = req.user._id;

//     // Find the chat between the sender and receiver
//     const connection = await Chat.findOne({
//       members: { $all: [senderId, receiverId] },
//     }).populate("messages"); // Populates the messages associated with this chat

//     if (!connection) {
//       return res
//         .status(404)
//         .json({ message: "No chat found, start your conversation" });
//     } else {
//       return res.status(200).json(connection.messages);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// export { chatOneOnOne, getMessage };
