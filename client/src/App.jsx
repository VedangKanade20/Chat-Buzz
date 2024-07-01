// import { Flex } from "@chakra-ui/react";
import MainPage from "./Pages/MainPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthPage from "./Pages/AuthPage";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex-container">
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/chat" element={<MainPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
