import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Text, Input, Heading } from "@chakra-ui/react";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const [user, setUser] = useState({
    firstName: "",
    lastName: " ",
    username: "",
    email: " ",
    password: "",
    confirmPassword: "",
    gender: "",
    picture: " ",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/users/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      navigate("/login");
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }

    setUser({
      firstName: "",
      lastName: " ",
      username: "",
      email: " ",
      password: "",
      confirmPassword: "",
      gender: "",
      picture: " ",
    });
  };

  return (
    <>
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
            Create your ChatBuzz Account
          </Heading>
          <Flex direction="row" w="full">
            <Flex direction="column" w="full">
              <Text mb="2">First name:</Text>
              <Input
                placeholder="First name"
                type="name"
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
                bgColor="white"
                color="black"
                w="full"
              />
            </Flex>
            <Flex direction="column" w="full">
              <Text mb="2">Last name:</Text>
              <Input
                placeholder="Last name"
                type="name"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                bgColor="white"
                color="black"
                w="full"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default RegisterPage;
