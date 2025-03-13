import io from "socket.io-client";

const socket = io("http://localhost:8070", {
  transports: ["websocket", "polling"], // WebSocket preferred, fallback to polling
  withCredentials: true,
});

export default socket;
