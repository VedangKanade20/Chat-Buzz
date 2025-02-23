// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setMessages } from "../redux/messageSlice";
// import { io } from "socket.io-client"; // Make sure you imported this

// const useGetRealTimeMessages = () => {
//   const dispatch = useDispatch();

//   const { authUser, selectedUser } = useSelector((store) => store.user);
//   const { messages } = useSelector((store) => store.messages);

//   useEffect(() => {
//     if (!authUser || !selectedUser?._id) return;

//     // Initialize socket connection
//     const socket = io("http://localhost:8070"); // Adjust if needed

//     console.log("Socket Initialized:", socket); // Debugging

//     if (!socket || typeof socket.on !== "function") {
//       console.error("Socket is not properly initialized!", socket);
//       return;
//     }

//     // Listen for real-time messages
//     socket.on("newMessage", (newMessage) => {
//       console.log("Received Real-Time Message:", newMessage);
//       dispatch(setMessages([...messages, newMessage])); // Update Redux store
//       console.log("Fetched messages:", response.data);
//     });

//     return () => {
//       console.log("Disconnecting Socket");
//       socket.disconnect();
//     };
//   }, [authUser, selectedUser, dispatch, messages]);
// };

// export default useGetRealTimeMessages;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { io } from "socket.io-client";

const socket = io("http://localhost:8070", { autoConnect: false });

const useGetRealTimeMessages = () => {
  const dispatch = useDispatch();
  const { authUser, selectedUser } = useSelector((store) => store.user);

  useEffect(() => {
    if (!authUser || !selectedUser?._id) return;

    if (!socket.connected) {
      socket.connect();
      console.log("✅ Socket Connected:", socket.id);
    }

    socket.on("newMessage", (newMessage) => {
      console.log("📩 Received new message:", newMessage);

      if (!newMessage || !newMessage._id) {
        console.warn("⚠️ Invalid message received:", newMessage);
        return;
      }

      dispatch(setMessages((prevMessages) => [...prevMessages, newMessage]));
    });

    return () => {
      console.log("🔴 Disconnecting Socket");
      socket.off("newMessage");
      socket.disconnect();
    };
  }, [authUser, selectedUser, dispatch]);

  return null;
};

export default useGetRealTimeMessages;
