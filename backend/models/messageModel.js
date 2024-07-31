import mongoose from "mongoose";
import Chat from "./chatModel.js";

const messageSchema = mongoose.Schema(
  {
    chatId: {
      type: String,
      ref: Chat,
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // message: {
    //   type: Array,
    //   required: true,
    //   default: [],
    // },
    chats: {
      type: [
        {
          url: String,
          localPath: String,
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);
const Message = mongoose.model("Message", messageSchema);
export default Message;
