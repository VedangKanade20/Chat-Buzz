import { Flex, Box } from "@chakra-ui/react";
import Header from "./Header";
import ListOfUsers from "./ListOfUsers";

const LeftSide = () => {
  return (
    <Flex
      backgroundColor="gray.900"
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
        {/* call other users here like not hook but the users  */}
        <Box w="100">
          <ListOfUsers />
        </Box>
      </Box>
    </Flex>
  );
};

export default LeftSide;
