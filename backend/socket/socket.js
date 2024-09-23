// import express from "express";
// import http from "http";
// import { Server } from "socket.io";

// const app = express();

// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:5173"],
//     methods: ["GET", "POST"],
//   },
// });

// export const getReceiverSocketId = (receiverId) => {
//   return userSocketMap[receiverId];
// };

// const userSocketMap = {}; //userId => socketId

// io.on("connection", (socket) => {
//   console.log("user Connected", socket.id);

//   const userId = socket.handshake.query.userId;

//   if (userId !== undefined) {
//     userSocketMap[userId] = socket.id;
//   }

//   io.emit("getOtherUsers", Object.keys(userSocketMap));

//   socket.on("disconnect", () => {
//     // console.log("user disconnected", socket.userId);
//     delete userSocketMap[userId];
//     io.emit("getOtherUsers", Object.keys(userSocketMap));
//   });
// });

// export { app, io, server };

import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

// CORS configuration for socket.io
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"], // Allow connections from this origin
    methods: ["GET", "POST"], // Allow GET and POST requests
  },
});

// A map to track userId -> socketId associations
const userSocketMap = {};

// Helper function to get the receiver's socket ID by user ID
export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

// Handle new socket connections
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

// Export the app, io, and server for use in other modules
export { app, io, server };
