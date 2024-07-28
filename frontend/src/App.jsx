// import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "./Pages/AuthPage";
import "./App.css";
import ChatPage from "./Pages/ChatPage";
import WelcomePage from "./Pages/Welcome";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex-container">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
