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
// import { setSocket } from "./redux/socketSlice";
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
//   const { socket } = useSelector((store) => store.socket);

//   useEffect(() => {
//     let socketio;

//     if (authUser) {
//       socketio = io("http://localhost:8080", {
//         query: {
//           userId: authUser._id,
//         },
//       });

//       dispatch(setSocket(socketio));

//       socketio.on("setOtherUsers", (otherUsers) => {
//         dispatch(setOtherUsers(otherUsers));
//       });
//     }

//     return () => {
//       if (socket) {
//         socketio.close();
//         dispatch(setSocket(null));
//       }
//     };
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
    let socketio;

    if (authUser) {
      socketio = io("http:/localhost:8080", {
        query: {
          userId: authUser._id, // Pass userId when connected
        },
        transports: ["websocket"], // Prefer WebSocket over polling
      });

      // Dispatch the socket object to the Redux store
      dispatch(setSocket(socketio));

      // Listen for other users from the socket
      socketio.on("setOtherUsers", (otherUsers) => {
        dispatch(setOtherUsers(otherUsers));
      });
    }

    // Clean up the socket connection when the user logs out or component unmounts
    return () => {
      if (socketio) {
        socketio.disconnect(); // Properly close the socket connection
        dispatch(setSocket(null)); // Reset socket in the store
      }
    };
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
