import http from "http";
import { Server } from "socket.io";
import express from "express";

const app = express(); // Initialize express app
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"], // Allow client origin
    methods: ["GET", "POST"],
  },
});

// User-Socket Mapping
const userSocketMap = {};

// Export function to get a receiver's socket ID
export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

// Socket.IO Connection
io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  const userId = socket.handshake.query.userId; // Get userId from handshake query

  if (userId) {
    userSocketMap[userId] = socket.id; // Map userId to socketId
    console.log(`User ${userId} is now mapped to socket ${socket.id}`);
  } else {
    console.log("No userId found in socket handshake");
  }

  // Emit all connected users to the frontend
  io.emit("getOtherUsers", Object.keys(userSocketMap));

  // Listen for messages and send to a specific user
  socket.on("sendMessage", ({ receiverId, message }) => {
    const receiverSocketId = getReceiverSocketId(receiverId); // Get receiver's socket ID
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", { message, senderId: userId });
    }
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log(`User ${userId} disconnected`);
    if (userId) {
      delete userSocketMap[userId]; // Remove user from map
      console.log(`Removed user ${userId} from userSocketMap`);
    }
    io.emit("getOtherUsers", Object.keys(userSocketMap)); // Broadcast updated user list
  });
});

// Export app and server
export { app, server };
