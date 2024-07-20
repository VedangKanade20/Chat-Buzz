// import mongoose from "mongoose";

// const chatSchema = mongoose.Schema(
//   {
//     participants: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//       },
//     ],
//   },
//   { timestamps: true }
// );

// const Chat = mongoose.model("chats", chatSchema);

// export default Chat;

//

import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  { timestamps: true }
);
export const Chat = mongoose.model("Chat", chatSchema);
