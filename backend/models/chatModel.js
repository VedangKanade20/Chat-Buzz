import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
  {
    members: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("chats", chatSchema);

export default Chat;