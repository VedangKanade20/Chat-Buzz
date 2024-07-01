import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const AuthPage = () => {
  return (
    <Flex
      width="100%"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <Box maxW="sm" width="full" textColor="gray.600" spacing={5}>
        <Box textAlign="center" pb={8}>
          <Image src="https://floatui.com/logo.svg" width={150} mx="auto" />
          <Box mt={5}>
            <Heading as="h3" size="lg" fontWeight="bold" color="gray.800">
              Log in to your account
            </Heading>
          </Box>
        </Box>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack spacing={5}>
            <FormControl>
              <FormLabel fontWeight="medium">Email</FormLabel>
              <Input
                type="email"
                required
                mt={2}
                px={3}
                py={2}
                textColor="gray.500"
                bg="transparent"
                outline="none"
                borderColor="gray.300"
                _focus={{ borderColor: "indigo.600" }}
                shadow="sm"
                rounded="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="medium">Password</FormLabel>
              <Input
                type="password"
                required
                mt={2}
                px={3}
                py={2}
                textColor="gray.500"
                bg="transparent"
                outline="none"
                borderColor="gray.300"
                _focus={{ borderColor: "indigo.600" }}
                shadow="sm"
                rounded="lg"
              />
            </FormControl>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              textColor="gray.500"
              fontSize="sm"
            >
              <Checkbox colorScheme="indigo">Remember me</Checkbox>
              <Link color="indigo.600" _hover={{ color: "indigo.500" }}>
                Forgot password?
              </Link>
            </Flex>
            <Button
              width="full"
              px={4}
              py={2}
              textColor="white"
              fontWeight="medium"
              bg="indigo.600"
              _hover={{ bg: "indigo.500" }}
              _active={{ bg: "indigo.600" }}
              rounded="lg"
            >
              Sign in
            </Button>
          </Stack>
        </form>
        <Button
          mt={5}
          width="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={3}
          py={2.5}
          borderColor="gray.300"
          borderWidth={1}
          rounded="lg"
          textColor="gray.600"
          fontWeight="medium"
          bg="white"
          _hover={{ bg: "gray.50" }}
          _active={{ bg: "gray.100" }}
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_17_40)">
              <path
                d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                fill="#4285F4"
              />
              <path
                d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                fill="#34A853"
              />
              <path
                d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                fill="#FBBC04"
              />
              <path
                d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="10px" height="10px" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Continue with Google
        </Button>
        <Text textAlign="center" mt={5}>
          Dont have an account?{" "}
          <Link color="indigo.600" _hover={{ color: "indigo.500" }}>
            Sign up
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default AuthPage;
