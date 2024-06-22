import { Flex, Spacer, Box } from "@chakra-ui/react";
import AccountCard from "./AccountCard";
import Header from "./Header";

// const LeftSide = () => {
//   return (
//     <Flex
//       bgColor="red.400"
//       textColor="white"
//       w="20vw"
//       h="89vh"
//       alignItems="center"
//       direction="column"
//       p="1vw"
//       borderRadius="5px"
//       overflowY="auto"
//     >
//       <Header />

//       <AccountCard />
//       <AccountCard />
//       <AccountCard />
//       <AccountCard />
//       <AccountCard />
//       <AccountCard />
//       <AccountCard />
//       <AccountCard />
//     </Flex>
//   );
// };

// export default LeftSide;

const LeftSide = () => {
  return (
    <Flex
      bgColor="red.400"
      textColor="white"
      w="20vw"
      h="89vh"
      alignItems="center"
      direction="column"
      p="1vw"
      borderRadius="5px"
    >
      <Header />

      <Box w="100%" overflowY="auto">
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
