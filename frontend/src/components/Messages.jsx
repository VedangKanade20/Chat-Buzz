import { useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import { Box, Text } from "@chakra-ui/react";

const Messages = () => {
  const { selectedUser, authUser } = useSelector((store) => store.user);
  const allMessages = useSelector((store) => store.messages?.messages || []);
  const messagesEndRef = useRef(null);

  // Filter messages for current chat using useMemo for optimization
  const currentMessages = useMemo(() => {
    if (!selectedUser?._id || !authUser?._id) return [];

    return allMessages.filter((msg) => {
      return (
        (msg.senderId === authUser._id &&
          msg.receiverId === selectedUser._id) ||
        (msg.senderId === selectedUser._id && msg.receiverId === authUser._id)
      );
    });
  }, [allMessages, selectedUser?._id, authUser?._id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessages]);

  return (
    <Box flexGrow={1} overflowY="auto" px={4}>
      {currentMessages.length > 0 ? (
        currentMessages.map((msg) => <Message key={msg._id} message={msg} />)
      ) : (
        <Text>No messages yet. Start the conversation!</Text>
      )}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default Messages;
