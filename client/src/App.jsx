import { Flex } from "@chakra-ui/react";
import MainPage from "./Pages/MainPage";

const App = () => {
  return (
    <>
      <Flex
        w="100vw"
        h="100vh"
        bgColor="#C9BCDE"
        align="center"
        justifyContent="center"
      >
        <MainPage />
      </Flex>
    </>
  );
};

export default App;
