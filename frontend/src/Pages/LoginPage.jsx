import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { setAuthUser } from "../redux/userSlice";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  VStack,
  Heading,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:8080/api/users/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${res.data.token}`,
          },
          withCredentials: true,
        }
      );
      navigate("/chat");
      dispatch(setAuthUser(res.data));
      localStorage.setItem(res.data.token);
    } catch (err) {
      toast.error(err.response.data.message); // Log the server error response
      console.log(err);
    }

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      w="100vw"
      p="4"
    >
      {/* Logo Section */}
      <Box mb="6">
        <img src="../../logoCHAT-BUZZ.png" width="80px" alt="ChatBuzz Logo" />
      </Box>

      {/* Form Section */}
      <Flex
        w="30vw" // Smaller width for the form
        p="6"
        bgColor="black"
        color="white"
        borderRadius="20px"
        boxShadow="lg"
        direction="column"
        alignItems="center"
      >
        <Heading fontSize="xl" textAlign="center" mb="4">
          Log into your ChatBuzz Account
        </Heading>

        <VStack spacing="4" w="full">
          {/* EMAIL ID */}
          <Box w="full">
            <Text mb="2">Enter Your Email:</Text>
            <Input
              placeholder="Email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              bgColor="white"
              color="black"
              w="full"
            />
          </Box>

          {/* PASSWORD */}
          <Box w="full">
            <Text mb="2">Enter Your Password:</Text>
            <InputGroup size="md">
              <Input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                bgColor="white"
                color="black"
                w="full"
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  onClick={togglePasswordVisibility}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
          </Box>

          {/* LOGIN BUTTON */}
          <Button
            type="submit"
            bgColor="blue.500"
            color="white"
            w="full"
            onClick={onSubmitHandler}
          >
            Login!
          </Button>
        </VStack>

        <Box textAlign="center" mt="auto" marginTop="2">
          <Text mb="2" textColor="red" textDecor="bold">
            Dont have an Account?{" "}
          </Text>
          <Link as={RouterLink} to="/register">
            <Text textColor="green" textDecor="underline">
              Click Here
            </Text>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LoginPage;

// import {
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Link,
//   Spacer,
//   Text,
// } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Link as RouterLink,
//   useNavigate,
//   useSearchParams,
// } from "react-router-dom";

// import { login } from "../actions/userActions";
// import FormContainer from "../components/FormContainer";
// import Message from "../components/Message";

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [searchParams] = useSearchParams();
//   // let redirect = searchParams.get("redirect") || "/";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo, loading, error } = userLogin;

//   useEffect(() => {
//     if (userInfo) {
//       navigate("/chat");
//     }
//   }, [userInfo]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(login(email, password));
//   };

//   return (
//     <Flex w="full" alignItems="center" justifyContent="center" py="5">
//       <FormContainer>
//         <Heading as="h1" mb="8" fontSize="3xl">
//           Login
//         </Heading>

//         {error && <Message type="error">{error}</Message>}

//         <form onSubmit={submitHandler}>
//           <FormControl id="email">
//             <FormLabel htmlFor="email">Email address</FormLabel>
//             <Input
//               id="email"
//               type="email"
//               placeholder="username@domain.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </FormControl>

//           <Spacer h="3" />

//           <FormControl id="password">
//             <FormLabel htmlFor="password">Password</FormLabel>
//             <Input
//               id="password"
//               type="password"
//               placeholder="************"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </FormControl>

//           <Button type="submit" colorScheme="teal" mt="4" isLoading={loading}>
//             Login
//           </Button>
//         </form>

//         <Flex pt="10">
//           <Text fontWeight="semibold">
//             New Customer?{" "}
//             <Link as={RouterLink} to="/register">
//               Click here to register
//             </Link>
//           </Text>
//         </Flex>
//       </FormContainer>
//     </Flex>
//   );
// };

// export default LoginPage;
