import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import WelcomePage from "./Pages/Welcome";
import { setOtherUsers } from "./redux/userSlice";
import { setSocketId, setSocketConnected } from "./redux/socketSlice";
import socket from "./socket"; // Import the singleton socket instance
import "./App.css";

const RegisterPage = lazy(() => import("./Pages/RegisterPage"));
const ChatPage = lazy(() => import("./Pages/ChatPage"));
const LazyLoginPage = lazy(() => import("./Pages/LoginPage"));

const ErrorPage = () => (
  <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
    <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/90 p-10 shadow-2xl shadow-cyan-500/10">
      <h1 className="text-4xl font-bold text-white">404 Not Found</h1>
      <p className="mt-4 text-cyan-100/80">
        The page you’re looking for doesn’t exist. Use the navigation to return
        home or try again.
      </p>
      <div className="mt-8">
        <a
          href="/"
          className="inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
        >
          Go back home
        </a>
      </div>
    </div>
  </main>
);

// Define the router configuration
const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  // { path: "/signup", element: <RegisterPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LazyLoginPage /> },
  { path: "/chat", element: <ChatPage /> },
  { path: "*", element: <ErrorPage /> },
]);

function App() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.user);

  useEffect(() => {
    if (authUser) {
      socket.io.opts.query = { userId: authUser._id };
      socket.connect();

      socket.on("connect", () => {
        dispatch(setSocketId(socket.id));
        dispatch(setSocketConnected(true));
        console.log("Client connected:", socket.id);
      });

      socket.on("setOtherUsers", (otherUsers) => {
        dispatch(setOtherUsers(otherUsers));
      });

      socket.on("disconnect", () => {
        dispatch(setSocketConnected(false));
        console.log("Client disconnected:", socket.id);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [authUser, dispatch]);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 text-white">Loading…</div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
