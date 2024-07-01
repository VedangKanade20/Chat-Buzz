import { Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="start"
      w="full"
      p="10px"
      bgColor="green.800"
      borderRadius="10px"
    >
      <Heading as="h1" size="md">
        Chat-Buzz
      </Heading>
    </Flex>
  );
};

export default Header;
