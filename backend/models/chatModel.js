import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
  {
    members: {
      type: Array,
      ref: "User",
      required: true,
    },
    chats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("chats", chatSchema);

export default Chat;
