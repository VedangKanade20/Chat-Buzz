import { Flex, Box } from "@chakra-ui/react";
import AccountCard from "./AccountCard";
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
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />

        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </Box>
    </Flex>
  );
};

export default LeftSide;
