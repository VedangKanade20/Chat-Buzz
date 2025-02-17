import io from "socket.io-client";

const socket = io("http://localhost:8070", {
  transports: ["polling"], // Prefer WebSocket over polling
});

export default socket;
