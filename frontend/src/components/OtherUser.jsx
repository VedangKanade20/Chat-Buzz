import React, { useCallback } from "react";
import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUser = React.memo(({ user }) => {
  const dispatch = useDispatch();

  const selectedUserId = useSelector(
    (state) => state.user.selectedUser?._id,
    (prev, next) => prev === next
  );

  console.log("Rendering User:", user?._id);

  const selectedUserHandler = useCallback(() => {
    if (selectedUserId !== user?._id) {
      console.log("Updating selectedUser:", user);
      dispatch(setSelectedUser(user));
    }
  }, [dispatch, selectedUserId, user?._id]); // Only depend on user._id

  return (
    <Flex
      onClick={selectedUserHandler}
      w="18vw"
      h="8vh"
      justifyContent="space-between"
      borderRadius="10px"
      bg={selectedUserId === user?._id ? "black" : "transparent"}
      gap="5"
      textAlign="center"
      cursor="pointer"
      transition="background 0.2s ease-in-out"
      _hover={{ bg: "gray.700" }}
    >
      <Box ml="1" w="12" borderRadius="full" overflow="hidden">
        <Image src={user?.picture} alt="user-profile" />
      </Box>
      <Flex direction="row" flex="1" gap="3" mt="3">
        <Text fontWeight="semibold" fontFamily="sans-serif" textColor="white">
          {user?.firstName} {user?.lastName}
        </Text>
      </Flex>
    </Flex>
  );
});

export default OtherUser;
