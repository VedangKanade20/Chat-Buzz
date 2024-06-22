import { Flex, Text } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Flex
        bgColor="green.700"
        w="74vw"
        h="89vh"
        alignItems="center"
        justifyContent="center"
        textColor="white"
        borderRadius="5px"
        overflowY="auto"
      >
        <Text>This is a message area </Text>
      </Flex>
    </Flex>
  );
};

export default MainPage;
