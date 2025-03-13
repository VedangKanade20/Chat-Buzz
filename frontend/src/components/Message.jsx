import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Box, Avatar, Text, Flex } from "@chakra-ui/react";

const Message = ({ message }) => {
  const scroll = useRef(); // react-hook........
  const { authUser, selectedUser } = useSelector((store) => store.user);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const isSender = authUser?._id === message?.senderId;

  // Debugging to check if chatId exists
  if (!message?.chatId) {
    console.warn("⚠️ Skipping message with missing chatId:", message);
    return null;
  }

  return (
    <Flex
      ref={scroll}
      direction="column"
      align={isSender ? "flex-end" : "flex-start"}
      mb={4}
    >
      <Flex align="center" gap={2}>
        <Avatar
          size="sm"
          src={isSender ? authUser?.profilePhoto : selectedUser?.profilePhoto}
        />
        <Text fontSize="xs" color="gray.500">
          {new Date(message?.createdAt).toLocaleTimeString()}
        </Text>
      </Flex>
      <Box
        maxW="70%"
        bg={isSender ? "blue.500" : "gray.200"}
        color={isSender ? "white" : "black"}
        px={4}
        py={2}
        borderRadius="lg"
      >
        {message?.message}
      </Box>
    </Flex>
  );
};

export default Message;
