import { Flex, Box } from "@chakra-ui/react";
import AccountCard from "./AccountCard";
import users from "../../data/users";
import Header from "./Header";

const LeftSide = () => {
  return (
    <Flex
      bgColor="green.200"
      textColor="white"
      w="20vw"
      h="89vh"
      alignItems="center"
      direction="column"
      borderRadius="10px"
      p="5px"
      gap="5px"
    >
      <Header />
      <Box gap="15px" overflowY="auto">
        {users.map((user) => (
          <AccountCard key={user._id} user={user}  />
        ))}
      </Box>
    </Flex>
  );
};

export default LeftSide;
