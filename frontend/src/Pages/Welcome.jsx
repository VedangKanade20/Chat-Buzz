import { Button, Flex, Heading, Image, keyframes } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// Define keyframes for custom animations
const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.10); }
  100% { transform: scale(1); }
`;

const slideInAnimation = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <Flex alignItems="center" justifyContent="center" height="100vh" w="100vw">
      <Flex
        alignItems="center"
        justifyContent="center"
        gap="10"
        direction="column"
        mb="10"
        animation={`${slideInAnimation} 2s ease-in-out`} // Slide in animation
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Image
            src="../../logoCHAT-BUZZ.png"
            alt="Logo"
            borderRadius="full"
            boxSize="120px"
            mb="20px"
            animation={`${pulseAnimation} 2s infinite`} // Pulse animation
            _hover={{
              transform: "scale(1.15)", // Slightly increase the size on hover
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.8)", // Add a shadow on hover
            }}
            transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out" // Smooth transition effect
          />
          <Heading
            textColor="black" // Original text color
            fontFamily="robert"
            fontSize="70"
            textShadow="2px 2px 10px rgba(0, 0, 0, 0.3)" // Text shadow for effect
            animation={`${slideInAnimation} 1.5s ease-in-out`} // Slide in animation for heading
          >
            Welcome to Chat Buzz
          </Heading>
        </Flex>
        <Flex
          direction="row"
          gap="50px"
          animation={`${slideInAnimation} 2s ease-in-out`}
        >
          <Button
            bgColor="black" // Original button background color
            w="60"
            alignItems="center"
            justifyContent="center"
            textColor="white"
            fontFamily="robert"
            onClick={() => navigate("/login")}
            h="50px"
            fontSize="30"
            _hover={{
              transform: "translateY(-5px)", // Lift button on hover
              bgColor: "gray.800", // Slightly lighter shade on hover
            }}
            transition="transform 0.2s ease-in-out, background-color 0.2s ease-in-out"
          >
            Login
          </Button>
          <Button
            bgColor="black" // Original button background color
            w="60"
            alignItems="center"
            justifyContent="center"
            textColor="white"
            fontFamily="robert"
            onClick={() => navigate("/register")}
            h="50px"
            fontSize="30"
            _hover={{
              transform: "translateY(-5px)", // Lift button on hover
              bgColor: "gray.800", // Slightly lighter shade on hover
            }}
            transition="transform 0.2s ease-in-out, background-color 0.2s ease-in-out"
          >
            Register
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WelcomePage;
