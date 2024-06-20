import { Flex } from "@chakra-ui/react";
import MainPage from "./Pages/MainPage";
import SideBar from "./components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoryPage from "./Pages/StoryPage";
import ChannelPage from "./Pages/ChannelPage";
import WritePage from "./Pages/WritePage";
import ProfilePage from "./Pages/ProfilePage";
import SavedMessagePage from "./Pages/SavedMessagePage";

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
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/channel" element={<ChannelPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/savedMessage" element={<SavedMessagePage />} />
          </Routes>
        </Flex>
      </BrowserRouter>
    </>
  );
};

export default App;
