import { Flex, Box, Text } from "@chakra-ui/react";
import Header from "./Header";

const LeftSide = () => {
  return (
    <Flex
      borderStyle="dotted"
      borderColor="red"
      textColor="white"
      w="20vw"
      h="80vh"
      alignItems="center"
      direction="column"
      borderRadius="10px"
      p="5px"
      gap="5px"
    >
      <Header />
      <Box gap="15px" overflowY="auto">
        <Text> Hello</Text>
      </Box>
    </Flex>
  );
};

export default LeftSide;
