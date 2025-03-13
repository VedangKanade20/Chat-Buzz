import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import { Box, Text } from "@chakra-ui/react";

const Messages = () => {
  const messages = useSelector((store) => store.messages?.messages || []);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box flexGrow={1} overflowY="auto" px={4}>
      {messages.length > 0 ? (
        messages
          .filter((msg) => msg?.chatId) // Ensure chatId exists
          .map((msg, index) => (
            <Message key={msg._id || `msg-${index}`} message={msg} />
          ))
      ) : (
        <Text>No messages yet.</Text>
      )}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default Messages;
