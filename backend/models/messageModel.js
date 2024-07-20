// import mongoose from "mongoose";

import mongoose from "mongoose";

// const messageSchema = mongoose.Schema(
//   {
//     sender: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//     content: {
//       type: String,
//     },
//     attachments: {
//       type: [
//         {
//           url: String,
//           localPath: String,
//         },
//       ],
//       default: [],
//     },
//     chat: {
//       type: Schema.Types.ObjectId,
//       ref: "Chat",
//     },
//   },
//   { timestamps: true }
// );

// const Message = mongoose.model("Message", messageSchema);

// export default Message;

// new model implementation for message => sender and receiver in this scenario

const messageSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// export const Message = mongoose.model("Message", messageModel);

const Message = mongoose.model("Message", messageSchema);
