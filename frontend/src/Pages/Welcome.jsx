import { Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <Flex alignItems="center" justifyContent="center" height="100vh" w="100vw">
      <Flex
        alignItems="center"
        justifyContent="center"
        gap="10"
        direction="column"
      >
        <Flex direction="column">
          <Heading
            alignItems="center"
            justifyContent="center"
            textColor="black"
            fontFamily="robert"
          >
            Welcome to Chat Buzz
          </Heading>
        </Flex>
        <Flex dir="column" gap="50px">
          <Button
            bgColor="black"
            w="fit"
            alignItems="center"
            justifyContent="center"
            textColor="white"
            fontFamily="robert"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            bgColor="black"
            w="fit"
            alignItems="center"
            justifyContent="center"
            textColor="white"
            fontFamily="robert"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
          <Button
            bgColor="black"
            w="fit"
            alignItems="center"
            justifyContent="center"
            textColor="white"
            fontFamily="robert"
          >
            READ DOCS
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WelcomePage;
