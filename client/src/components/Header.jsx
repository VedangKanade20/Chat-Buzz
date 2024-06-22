import { Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex alignItems="center" justifyContent="start">
      <Flex
        bgColor="violet.400"
        textColor="white"
        w="20vw"
        h="10vh"
        alignItems="center"
        justifyContent="top"
      >
        <Text>Chats</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
