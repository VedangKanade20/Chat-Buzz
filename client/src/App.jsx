import { Flex } from "@chakra-ui/react";
import MainPage from "./Pages/MainPage";

const App = () => {
  return (
    <>
      <Flex w="100vw" h="100vh" bgColor="#C9BCDE">
        <MainPage />
      </Flex>
    </>
  );
};

export default App;
