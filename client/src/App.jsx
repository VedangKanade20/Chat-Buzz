// import { Flex } from "@chakra-ui/react";
import MainPage from "./Pages/MainPage";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftSide from "./components/LeftSide";
import AuthPage from "./Pages/AuthPage";
import "./App.css";
import SingleChatPage from "./Pages/SingleChatPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex-container">
          <SideBar />
          <LeftSide />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
