import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = (message) => {
  const scroll = useRef();

  const { authUser, selectedUser } = useSelector((store) => store.user);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <Flex
      ref={scroll}
      direction="column"
      align={authUser?._id === message?.senderId ? "flex-end" : "flex-start"}
      mb="4"
    >
      <Flex alignItems="center" mb="2">
        <Image
          w="35px"
          src={
            message?.senderId === authUser?._id
              ? authUser?.picture
              : selectedUser?.picture
          }
          alt="Profile Phto"
          mr="2"
        />
        <Text fontSize="s" opacity="0.5" color="white">
        12:45
        </Text>
      </Flex>
      <Box bg={message?.senderId !== authUser?._id ? "gray.200" : "blue.500" }
      color={message?.senderId !== authUser?._id ? "black" : "white"}
      borderRadius="lg"
      p={3}
      maxW="80%"
      >
        {message?.message}
      </Box>
    </Flex>
  );
};

export default Message;
