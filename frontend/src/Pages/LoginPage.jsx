// /* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { setAuthUser } from "../redux/userSlice";
// import {
//   Box,
//   Flex,
//   Text,
//   Input,
//   Button,
//   VStack,
//   Heading,
//   Spacer,
// } from "@chakra-ui/react";
// import axios from "axios";
// import { Link as RouterLink } from "react-router-dom";

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         `http://localhost:8080/api/users/login`,
//         user,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       navigate("/");
//       dispatch(setAuthUser(res.data));
//     } catch (err) {
//       toast.error(err.response.data.message); // Log the server error response
//       console.log(err);
//     }

//     setUser({
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <Flex
//       direction="column"
//       justifyContent="center"
//       alignItems="center"
//       class="mainFlex"
//       minH="100vh"
//       w="100vw"
//     >
//       <Flex
//         w="45vw"
//         h="70vh"
//         p="4"
//         bgColor="black"
//         color="white"
//         borderRadius="20"
//         boxShadow="lg"
//         class="boxForm"
//         gap="20px"
//         direction="column"
//         alignItems="center"
//       >
//         <Heading fontSize="2xl" mb="4" textAlign="center">
//           To Continue, Log into your ChatBuzz Account
//         </Heading>
//         <form onSubmit={onSubmitHandler}>
//           {/* EMAIL ID */}
//           <Text>Enter Your Email</Text>
//           <Input
//             placeholder="Email"
//             type="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             bgColor="white"
//             color="black"
//             w="400px"
//           />
//           <Spacer />
//           {/* PASSWORD */}
//           <Text>Enter Your Password</Text>
//           <Input
//             placeholder="Password"
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             bgColor="white"
//             color="black"
//             w="400px"
//           />
//           <Button type="submit" bgColor="blue" w="400px">
//             Login!
//           </Button>
//           <Text fontSize="2xl">Dont have an Account?, For New users</Text>
//           <Link as={RouterLink} to={"/register"} color="blue.500">
//             Click Here
//           </Link>
//         </form>
//       </Flex>
//     </Flex>
//   );
// };

// export default LoginPage;

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { setAuthUser } from "../redux/userSlice";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  VStack,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:8080/api/users/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      navigate("/");
      dispatch(setAuthUser(res.data));
    } catch (err) {
      toast.error(err.response.data.message); // Log the server error response
      console.log(err);
    }

    setUser({
      email: "",
      password: "",
    });
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      w="100vw"
    >
      <Flex
        w="45vw"
        h="70vh"
        p="8"
        bgColor="black"
        color="white"
        borderRadius="20px"
        boxShadow="lg"
        direction="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading fontSize="3xl" textAlign="center">
          Log into your ChatBuzz Account
        </Heading>

        <VStack spacing="4" w="full">
          {/* EMAIL ID */}
          <Box mt="4" w="full">
            <Text mb="4">Enter Your Email</Text>
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
          <Box mt="2" w="full">
            <Text mb="4">Enter Your Password</Text>
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
            mt="3"
            type="submit"
            bgColor="blue.500"
            color="white"
            w="full"
            onClick={onSubmitHandler}
          >
            Login!
          </Button>
        </VStack>

        <Box textAlign="center" mt="auto">
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
