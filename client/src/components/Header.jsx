import { Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex alignItems="center" justifyContent="start">
      <Flex
        bgColor="red.400"
        textColor="white"
        w="20vw"
        h="8vh"
        alignItems="center"
        justifyContent="top"
        textAlign="center"
      >
        <Heading as="lg">Chat-Buzz</Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
