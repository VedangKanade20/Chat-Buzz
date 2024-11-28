import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"], 
  },
});

// A map to track userId -> socketId associations
const userSocketMap = {};


export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};


io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  // Extract userId from the query string
  const userId = socket.handshake.query.userId;

  // If the userId exists, store it in the userSocketMap
  if (userId) {
    userSocketMap[userId] = socket.id;
    console.log(`User ${userId} is now mapped to socket ${socket.id}`);
  } else {
    console.log("No userId found in socket handshake");
  }

  // Emit the list of all connected users (excluding the current socket)
  io.emit("getOtherUsers", Object.keys(userSocketMap));

  // Handle the user disconnecting
  socket.on("disconnect", () => {
    console.log(`User ${userId} disconnected`);

    // Remove the user's socketId from the map
    if (userId) {
      delete userSocketMap[userId];
      console.log(`Removed user ${userId} from userSocketMap`);
    }

    // Emit the updated list of connected users
    io.emit("getOtherUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
