import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import io from "socket.io-client";
import LoginPage from "./Pages/LoginPage";
import ChatPage from "./Pages/ChatPage";
import WelcomePage from "./Pages/Welcome";
import RegisterPage from "./Pages/RegisterPage";
import { setOtherUsers } from "./redux/userSlice";
import { setSocket } from "./redux/socketSlice";
import "./App.css";

// Define the router configuration
const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/signup", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/chat", element: <ChatPage /> },
]);

function App() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);

  useEffect(() => {
    // let socketio;

    if (authUser) {
      const socketio = io("http://localhost:8070", {
        query: {
          userId: authUser._id, // Pass userId when connected
        },
        transports: ["polling"], // Prefer WebSocket over polling
      });

      // Dispatch the socket object to the Redux store
      dispatch(setSocket(socketio));

      // Listen for other users from the socket
      socketio?.on("setOtherUsers", (otherUsers) => {
        dispatch(setOtherUsers(otherUsers));
        console.log("New client connected:", socket.id);
      });

      // Clean up the socket connection when the user logs out or component unmounts
      return () => socketio.close();
    } else {
      if (socket) {
        socket.close(); // Properly close the socket connection
        dispatch(setSocket(null)); // Reset socket in the store
        console.log("Client disconnected:", socket.id);
      }
    }
  }, [authUser, dispatch]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      className="flex-container"
    >
      <RouterProvider router={router} />
    </Flex>
  );
}

export default App;
