import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    chatId: {
      type: String,
      required: true,
    },
    Chats: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
