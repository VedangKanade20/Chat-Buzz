import { Flex } from "@chakra-ui/react";
import LeftSide from "../components/LeftSide.jsx";
import ChatArea from "../components/ChatArea.jsx";

const ChatPage = () => {
  return (
    <>
      <Flex
        direction="row"
        p="30px"
        alignItems="center" // Aligns items vertically in the center
        justifyContent="center"
        w="100vw"
      >
        <LeftSide />
        <ChatArea />
      </Flex>
    </>
  );
};

export default ChatPage;
