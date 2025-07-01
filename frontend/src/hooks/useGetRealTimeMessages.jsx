import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/messageSlice";
import { io } from "socket.io-client";

const useGetRealTimeMessages = () => {
  const dispatch = useDispatch();
  const { authUser, selectedUser } = useSelector((store) => store.user);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!authUser?._id || !token) return;

    const socket = io("http://localhost:8070", {
      auth: {
        token: token, // Send JWT token for authentication
      },
      transports: ["websocket"], // Force WebSocket only
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    socket.on("connect", () => {
      console.log("✅ Socket connected:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.error("Connection error:", err.message);
      // Handle specific authentication errors
      if (err.message.includes("Authentication error")) {
        console.error("Invalid or expired token");
        // Optionally redirect to login
      }
    });

    socket.on("newMessage", (newMessage) => {
      if (!newMessage?.senderId || !newMessage?.message) return;

      // Validate message is for current chat
      if (
        (newMessage.senderId === selectedUser?._id &&
          newMessage.receiverId === authUser._id) ||
        (newMessage.senderId === authUser._id &&
          newMessage.receiverId === selectedUser?._id)
      ) {
        dispatch(addMessage(newMessage));
      }
    });

    return () => {
      socket.off("newMessage");
      socket.disconnect();
    };
  }, [authUser?._id, selectedUser?._id, token, dispatch]);

  return null;
};

export default useGetRealTimeMessages;
