import { Flex } from "@chakra-ui/react";

const AccountCard = () => {
  return (
    <Flex
      bgColor="black.400"
      borderStyle="dashed"
      textColor="black"
      w="20vw"
      h="10vh"
      justifyContent="center"
      borderRadius="10px"
      p="3px"
    >
      This is a card
    </Flex>
  );
};

export default AccountCard;
