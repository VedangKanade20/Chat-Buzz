import { Flex, Text } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <Flex alignItems="center" justifyContent="center" p="1vw">
      <Flex
        bgColor="green.100"
        w="24vw"
        h="89vh"
        alignItems="center"
        justifyContent="center"
        borderRadius="10px"
        overflowY="auto"
      >
        <Text>This is a list area</Text>
      </Flex>
      <Flex
        bgColor="green.700"
        w="74vw"
        h="89vh"
        alignItems="center"
        justifyContent="center"
        textColor="white"
        borderRadius="10px"
        overflowY="auto"
      >
        <Text>This is a message area </Text>
      </Flex>
    </Flex>
  );
};

export default MainPage;
