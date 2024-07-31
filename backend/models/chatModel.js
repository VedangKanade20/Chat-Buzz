import mongoose from "mongoose";
import User from "./userModel.js";

const chatSchema = mongoose.Schema(
  {
    members: {
      type: Array,
      ref: User,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("chats", chatSchema);

export default Chat;
