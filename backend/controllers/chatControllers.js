// import asyncHandler from "express-async-handler";
// import Chat from "../models/chatModel.js";
// import Message from "../models/messageModel.js";
// import messages from "../data/messages.js";

// /**
//  * @desc    Chat with user(ONE ON ONE)
//  * @route   POST api/chats/user_id
//  * @access  private*/
// const chatOneOnOne = asyncHandler(async (req, res) => {
//   try {
//     const senderId = req.user._id;
//     const receiverId = req.params.id;
//     const { message } = req.body;
//     console.log("Request received");
//     console.log("Sender ID:", req.user._id);
//     console.log("Receiver ID:", req.params.id);

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
//       existingChat.chats.push(newMessage._id);
//     }

//     await Promise.all([existingChat.save(), newMessage.save()]);

//     return res.status(201).json({
//       message: "Message send successfully",
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// /**
//  *@desc   Show chats
//  *@route   GET api/chats
//  *@access    private*/
// const getMessage = asyncHandler(async (req, res) => {
//   try {
//     const receiverId = req.params.id; // Ensure your route is defined as /api/chat/:id
//     const senderId = req.user._id;

//     // Find the chat between the sender and receiver
//     const connection = await Chat.findOne({
//       members: { $all: [senderId, receiverId] },
//     }).populate("messages"); // Populates the messages associated with this chat

//     if (!connection) {
//       return res
//         .status(404)
//         .json({ message: "No chat found, start your conversation" });
//       //if no chat is found
//     } else {
//       return res.status(200).json(connection.messages);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// export { chatOneOnOne, getMessage };

import asyncHandler from "express-async-handler";
import Chat from "../models/chatModel.js";
import Message from "../models/messageModel.js";

/**
 * @desc    Chat with user(ONE ON ONE)
 * @route   POST api/chats/:id
 * @access  Private
 */
const chatOneOnOne = asyncHandler(async (req, res) => {
  try {
    const senderId = req.user._id;
    const receiverId = req.params.id;
    const { message } = req.body;
    console.log("Request received");
    console.log("Sender ID:", req.user._id);
    console.log("Receiver ID:", req.params.id);

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
      existingChat.chats.push(newMessage._id);
      await existingChat.save();
    }

    return res.status(201).json({
      message: "Message sent successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

/**
 * @desc   Show chats
 * @route  GET api/chats/:id
 * @access Private
 */
const getMessage = asyncHandler(async (req, res) => {
  try {
    const receiverId = req.params.id; // Ensure your route is defined as /api/chats/:id
    const senderId = req.user._id;

    // Find the chat between the sender and receiver
    const connection = await Chat.findOne({
      members: { $all: [senderId, receiverId] },
    }).populate("messages"); // Populates the messages associated with this chat

    if (!connection) {
      return res
        .status(404)
        .json({ message: "No chat found, start your conversation" });
    } else {
      return res.status(200).json(connection.messages);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export { chatOneOnOne, getMessage };
