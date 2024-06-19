import { Flex } from "@chakra-ui/react";
import MainPage from "./Pages/MainPage";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <>
      <Flex
        w="100vw"
        h="100vh"
        bgColor="#C9BCDE"
        direction="row"
        gap="0"
        alignItems="center"
      >
        <SideBar />
        <MainPage />
      </Flex>
    </>
  );
};

export default App;
