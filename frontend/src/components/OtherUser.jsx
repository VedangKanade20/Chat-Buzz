/* eslint-disable react/prop-types */

import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUser = ({ user }) => {
  // Destructure user prop
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);

  const selectedUserHandler = () => {
    dispatch(setSelectedUser(user));
    console.log("Selected User Updated: ", user);
  };
  // console.log("Current selectedUser: ", selectedUser);

  return (
    <>
      <Flex
        onClick={selectedUserHandler} // Use the function directly
        w="18vw"
        h="8vh"
        justifyContent="space-between"
        borderRadius="10px"
        // eslint-disable-next-line react/prop-types
        bg={selectedUser?._id === user?._id ? "black" : "transparent"}
        gap="5"
        textAlign="center"
        cursor="pointer"
      >
        <Box ml="1" w="12" borderRadius="full" overflow="hidden">
          <Image src={user?.picture} alt="user-profile" />
        </Box>
        <Flex direction="row" flex="1" gap="3" mt="3">
          <Flex justify="space-between" gap="2">
            <Text
              fontWeight="semibold"
              fontFamily="sans-serif"
              textColor="white"
            >
              {user?.firstName}
            </Text>
          </Flex>
          <Flex justify="space-between" gap="2">
            <Text
              fontWeight="semibold"
              fontFamily="sans-serif"
              textColor="white"
            >
              {user?.lastName}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Box borderTop="1px" borderColor="gray.200" my="0" py="0" h="1" />
    </>
  );
};

export default OtherUser;
