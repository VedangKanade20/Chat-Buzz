import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Input,
  Heading,
  Checkbox,
  Button,
} from "@chakra-ui/react";

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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setUser({ ...user, picture: file });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(user).forEach((key) => {
        formData.append(key, user[key]);
      });
      const res = await axios.post(
        `http://localhost:8080/api/users/register`,
        user,
        formData, 
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
      navigate("/");
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

          {/* FIRST and LAST  NAME  */}

          <Flex direction="row" w="full" gap="10">
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
                placeholder="Last Name"
                type="namee"
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                bgColor="white"
                color="black"
                w="full"
              />
            </Flex>
          </Flex>

          {/* username and email id  */}

          <Flex direction="row" w="full" gap="10">
            <Flex direction="column" w="full">
              <Text mb="2">UserName :</Text>
              <Input
                placeholder="user name"
                type="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                bgColor="white"
                color="black"
                w="full"
              />
            </Flex>
            <Flex direction="column" w="full">
              <Text mb="2">Email Id:</Text>
              <Input
                placeholder="Email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                bgColor="white"
                color="black"
                w="full"
              />
            </Flex>
          </Flex>

          {/* password and con password  */}

          <Flex direction="row" w="full" gap="10">
            <Flex direction="column" w="full">
              <Text mb="2">Create Password:</Text>
              <Input
                placeholder="Your Password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                bgColor="white"
                color="black"
                w="full"
              />
            </Flex>
            <Flex direction="column" w="full">
              <Text mb="2">Confirm Password:</Text>
              <Input
                placeholder="confirm password"
                type="password"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                bgColor="white"
                color="black"
                w="full"
              />
            </Flex>
          </Flex>
          {/* Gender Selection */}
          <Flex direction="column" w="full" mt="4">
            <Text mb="2">Gender:</Text>
            <Flex>
              <Checkbox
                isChecked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                mr="4"
              >
                Male
              </Checkbox>
              <Checkbox
                isChecked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                mr="4"
              >
                Female
              </Checkbox>
              <Checkbox
                isChecked={user.gender === "other"}
                onChange={() => handleCheckbox("other")}
              >
                Other
              </Checkbox>
            </Flex>
            {/* Image Upload */}
            <Flex direction="column" w="full" mt="4">
              <Text mb="2">Profile Picture:</Text>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                bgColor="white"
                color="black"
              />
            </Flex>

            {/* Submit Button */}
            <Button
              type="submit"
              mt="6"
              bgColor="blue.500"
              color="white"
              _hover={{ bgColor: "blue.600" }}
              onClick={onSubmitHandler}
            >
              Register
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default RegisterPage;
