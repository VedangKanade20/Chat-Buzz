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


// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Flex } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import io from "socket.io-client";
// import LoginPage from "./Pages/LoginPage";
// import ChatPage from "./Pages/ChatPage";
// import WelcomePage from "./Pages/Welcome";
// import RegisterPage from "./Pages/RegisterPage";
// import { setOtherUsers } from "./redux/userSlice";
// import { setSocketId, setSocketConnected } from "./redux/socketSlice"; // Import the new actions
// import "./App.css";

// // Define the router configuration
// const router = createBrowserRouter([
//   { path: "/", element: <WelcomePage /> },
//   { path: "/signup", element: <RegisterPage /> },
//   { path: "/login", element: <LoginPage /> },
//   { path: "/chat", element: <ChatPage /> },
// ]);

// function App() {
//   const dispatch = useDispatch();
//   const { authUser } = useSelector((store) => store.user);
//   const { socketId, isConnected } = useSelector((store) => store.socket); // Use the new state structure

//   useEffect(() => {
//     let socketio;

//     if (authUser) {
//       socketio = io("http://localhost:8070", {
//         query: {
//           userId: authUser._id, // Pass userId when connected
//         },
//         transports: ["polling"], // Prefer WebSocket over polling
//       });

//       // Dispatch the socket ID and connection status to the Redux store
//       dispatch(setSocketId(socketio.id)); // Store the socket ID
//       dispatch(setSocketConnected(true)); // Set connection status to true

//       // Listen for other users from the socket
//       socketio?.on("setOtherUsers", (otherUsers) => {
//         dispatch(setOtherUsers(otherUsers));
//         console.log("New client connected:", socketio.id);
//       });

//       // Handle socket disconnection
//       socketio?.on("disconnect", () => {
//         dispatch(setSocketConnected(false)); // Set connection status to false
//         console.log("Client disconnected:", socketio.id);
//       });

//       // Cleanup function
//       return () => {
//         if (socketio) {
//           socketio.close(); // Properly close the socket connection
//           dispatch(setSocketId(null)); // Reset socket ID in the store
//           dispatch(setSocketConnected(false)); // Reset connection status
//           console.log("Client disconnected:", socketio.id);
//         }
//       };
//     } else {
//       if (socketId) {
//         // Reset socket state if authUser is not available
//         dispatch(setSocketId(null));
//         dispatch(setSocketConnected(false));
//         console.log("Client disconnected:", socketId);
//       }
//     }
//   }, [authUser, dispatch]);

//   return (
//     <Flex
//       justifyContent="center"
//       alignItems="center"
//       className="flex-container"
//     >
//       <RouterProvider router={router} />
//     </Flex>
//   );
// }

// export default App;