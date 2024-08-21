import { Flex, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="start"
        w="full"
        p="10px"
        bgColor="black"
        borderRadius="10px"
        borderColor="yellow"
        borderStyle="dashed"
        direction="row"
      >
        <Image
          src="../../logoCHAT-BUZZ.png"
          alt="Logo"
          boxSize="40px"
          mr="10px"
          _hover={{
            transform: "scale(1.1)", // Slightly increase the size on hover
            boxShadow: "0 25px 25px rgba(0, 0, 0, 0.5)", // Add a shadow on hover
          }}
          onClick={() => navigate("/chat")}
          cursor="pointer"
        />
        <Flex>
          <Heading as="h1" size="md" color="white">
            Chat-Buzz
          </Heading>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
