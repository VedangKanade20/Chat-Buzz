import { Flex } from "@chakra-ui/react";
import MainPage from "./Pages/MainPage";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftSide from "./components/LeftSide";
import AuthPage from "./Pages/AuthPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Flex
          w="100vw"
          h="100vh"
          bgColor="#C9BCDE"
          direction="row"
          gap="0"
          alignItems="center"
        >
          <SideBar />
          <LeftSide />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </Flex>
      </BrowserRouter>
    </>
  );
};

export default App;
