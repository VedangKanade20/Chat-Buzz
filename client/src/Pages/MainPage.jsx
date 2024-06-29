import { Flex, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import users from "../../data/users";

const MainPage = () => {
  const { id } = useParams();
  const user = users.find((user) => user._id === id);

  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Flex
          bgColor="green.100"
          w="74vw"
          h="89vh"
          alignItems="center"
          justifyContent="center"
          textColor="black  "
          borderRadius="5px"
          overflowY="auto"
          ml="3px"
        >
          
          <Text>Check your Chats</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default MainPage;
