import {
  Flex,
  Text,
  Link,
  Textarea,
  Button,
  VStack,
  Box,
} from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import users from "../../data/users";
import { useState } from "react";
import SideBar from "../components/SideBar";
import LeftSide from "../components/LeftSide";

const MainPage = () => {
  const { id } = useParams();
  const user = users.find((user) => user._id === id);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  // if (!user) {
  //   return (
  //     <Flex alignItems="center" justifyContent="center">
  //       <Flex
  //         bgColor="green.100"
  //         w="74vw"
  //         h="89vh"
  //         alignItems="center"
  //         justifyContent="center"
  //         textColor="black  "
  //         borderRadius="5px"
  //         overflowY="auto"
  //         ml="3px"
  //       >
  //         <Text>Check your Chats</Text>
  //       </Flex>
  //     </Flex>
  //   );
  // }

  return (
    <>
      <SideBar />
      <LeftSide />

      <Flex direction="column" align="center">
        <Link
          as={RouterLink}
          to={`/${user._id}`}
          _hover={{ textDecor: "none" }}
        >
        {/* WHOLE RIGHT SIDE */}
        {/* <Flex direction="column" justifyContent="center" alignItems="center">
            <Box
              bgColor="pink"
              w="78vw"
              h="5vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              This is Header for {user.username}
            </Box>
          </Flex>
        </Link> */}

        {/* Chat area */}
        {/* <Flex
          direction="column"
          w="78vw"
          h="85vh"
          bg="gray.100"
          p={4}
          mt={4}
          borderRadius="md"
        >
          <VStack flex={1} spacing={4} overflowY="auto" align="stretch">
            {messages.map((msg, index) => (
              <Box
                key={index}
                p={2}
                bg="white"
                borderRadius="md"
                boxShadow="sm"
              >
                <Text>{msg}</Text>
              </Box>
            ))}
          </VStack>

          <Flex mt={4} align="center">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              resize="none"
              flex={1}
            />
            <Button ml={2} onClick={handleSendMessage} colorScheme="blue">
              Send
            </Button>
          </Flex>
        </Flex>
      
        */}
      </Flex>
    </>
  );
};

export default MainPage;
