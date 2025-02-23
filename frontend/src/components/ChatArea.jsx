import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Avatar, Text, Flex, Heading } from "@chakra-ui/react";
import Messages from "./Messages";
import SendInput from "./SendInput";

const ChatArea = () => {
  const { selectedUser, authUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.messages);

  useEffect(() => {
    console.log("Messages updated:", messages);
  }, [messages]);

  return (
    <>
      {selectedUser ? (
        <Flex
          direction="column"
          minWidth={{ base: "100%", md: "550px" }}
          flexGrow={1}
          height="60vh"
        >
          <Flex
            gap={2}
            align="center"
            bg="gray.800"
            color="white"
            fontWeight="semibold"
            px={2}
            py={2}
            mb={2}
            h="10vh"
          >
            <Avatar
              src={selectedUser?.picture}
              size="md"
              name={selectedUser?.username}
            />
            <Flex direction="column" flex={1} h="10vh" alignContent="center">
              <Text fontWeight="semibold">{selectedUser.username}</Text>
            </Flex>
          </Flex>
          <Messages />
          <SendInput />
        </Flex>
      ) : (
        <Flex
          minW={{ base: "100%", md: "550px" }}
          direction="column"
          justify="center"
          align="center"
          textAlign="center"
          h="60vh"
        >
          <Heading as="h1" size="xl" color="white" fontWeight="bold">
            {authUser?.username}
          </Heading>
          <Heading as="h2" size="lg" color="white" fontWeight="semibold">
            Let's start a conversation
          </Heading>
        </Flex>
      )}
    </>
  );
};

export default ChatArea;
