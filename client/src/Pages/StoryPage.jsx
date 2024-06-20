import { Flex, Text } from "@chakra-ui/react";

const StoryPage = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Flex
        bgColor="green.400"
        textColor="white"
        w="20vw"
        h="89vh"
        alignItems="center"
        justifyContent="center"
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
        borderRadius="5px"
        overflowY="auto"
      >
        <Text>Click on a contact to watch their story </Text>
      </Flex>
    </Flex>
  );
};

export default StoryPage;
