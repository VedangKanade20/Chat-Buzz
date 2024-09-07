// import { Flex } from "@chakra-ui/react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import "./App.css";
import ChatPage from "./Pages/ChatPage";
import WelcomePage from "./Pages/Welcome";
import { Flex } from "@chakra-ui/react";
import RegisterPage from "./Pages/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import io from "socket.io-client";
import { setOtherUsers } from "./redux/userSlice";
import { setSocket } from "./redux/socketSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
]);

function App() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);

  useEffect(() => {
    if (authUser) {
      const socketio = io("htto://localhost:8080", {
        query: {
          userId: authUser._id,
        },
      });

      dispatch(setSocket(socketio));
      socketio?.on("setOtherUsers", (otherUsers) => {
        dispatch(setOtherUsers(otherUsers));
      });

      return () => socketio.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser]);
  return (
    <>
      <div className="flex-container">
        <Flex justifyContent="center" alignItems="center">
          <RouterProvider router={router} />
        </Flex>
      </div>
    </>
  );
}

export default App;
