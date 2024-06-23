import { Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex alignItems="center" justifyContent="start">
      <Flex
        bgColor="blue.400"
        textColor="white"
        w="20vw"
        h="8vh"
        alignItems="center"
        justifyContent="top"
        textAlign="center"
        p="3px"
      >
        <Heading as="xl">CHATS:</Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
