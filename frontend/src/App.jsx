// // import { Flex } from "@chakra-ui/react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LoginPage from "./Pages/LoginPage";
// import "./App.css";
// import ChatPage from "./Pages/ChatPage";
// import WelcomePage from "./Pages/Welcome";
// import { Flex } from "@chakra-ui/react";
// import RegisterPage from "./Pages/RegisterPage";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import io from "socket.io-client";
// import { setOtherUsers } from "./redux/userSlice";
// import { setSocket } from "./redux/socketSlice";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <WelcomePage />,
//   },
//   {
//     path: "/signup",
//     element: <RegisterPage />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/chat",
//     element: <ChatPage />,
//   },
// ]);

// function App() {
//   const dispatch = useDispatch();
//   const { authUser } = useSelector((store) => store.user);
//   const { socket } = useSelector((store) => store.socket);

//   useEffect(() => {
//     if (authUser) {
//       const socketio = io("http://localhost:8080", {
//         query: {
//           userId: authUser._id,
//         },
//       });

//       dispatch(setSocket(socketio));
//       socketio?.on("setOtherUsers", (otherUsers) => {
//         dispatch(setOtherUsers(otherUsers));
//       });

//       return () => socketio.close();
//     } else {
//       if (socket) {
//         socket.close();
//         dispatch(setSocket(null));
//       }
//     }
//   }, [authUser]);
//   return (
//     <>
//       <div className="flex-container">
//         <Flex justifyContent="center" alignItems="center">
//           <RouterProvider router={router} />
//         </Flex>
//       </div>
//     </>
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

    // Only create the socket connection if the user is authenticated
    if (authUser) {
      socketio = io("http://localhost:8080", {
        query: {
          userId: authUser._id,
        },
      });

      // Dispatch the socket instance to the Redux store
      dispatch(setSocket(socketio));

      // Listen for the "setOtherUsers" event and update the Redux store
      socketio.on("setOtherUsers", (otherUsers) => {
        dispatch(setOtherUsers(otherUsers));
      });
    }

    // Clean up the socket connection when the component unmounts or authUser changes
    return () => {
      if (socket) {
        socketio.close(); // Ensure that the socket connection is closed
        dispatch(setSocket(null)); // Clear the socket from Redux store
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
