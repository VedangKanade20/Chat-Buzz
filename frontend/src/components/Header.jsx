import { Flex, Heading, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="start"
      w="full"
      p="10px"
      bgColor="black"
      borderRadius="10px"
      borderColor="yellow"
      borderStyle="dashed"
    >
      <Image
        src="../../logoCHAT-BUZZ.png"
        alt="Logo"
        boxSize="40px"
        mr="10px"
      />
      <Heading as="h1" size="md" color="white">
        Chat-Buzz
      </Heading>
    </Flex>
  );
};

export default Header;
