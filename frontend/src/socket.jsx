import io from "socket.io-client";
import { API_URL } from "./apiConfig";

const socket = io(API_URL, {
  transports: ["websocket", "polling"], // WebSocket preferred, fallback to polling
  withCredentials: true,
});

export default socket;
