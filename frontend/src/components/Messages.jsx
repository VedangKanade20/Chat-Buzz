// import useGetRealTimeMessages from "../hooks/useGetRealTimeMessages";
// import useGetMessages from "../hooks/useGetMessages";
// import { useSelector } from "react-redux";
// import Message from "./Message";
// import { Flex, Text } from "@chakra-ui/react";

// const Messages = () => {
//   useGetRealTimeMessages();
//   useGetMessages();

//   const { messages } = useSelector((store) => store.messages);

//   console.log("Messages in Redux Store:", messages); // Debugging

//   return (
//     <Flex overflow="auto" px={4} flex="1">
//       {Array.isArray(messages) && messages.length > 0 ? (
//         messages
//           .filter((message) => message && message._id) // Remove null values
//           .map((message) => <Message key={message._id} message={message} />)
//       ) : (
//         <Text>No messages yet.</Text>
//       )}
//     </Flex>
//   );
// };

// export default Messages;

import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import { Box } from "@chakra-ui/react";

const Messages = () => {
  const { messages } = useSelector((store) => store.messages);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box flexGrow={1} overflowY="auto" px={4}>
      {messages.map((msg, index) => (
        <Message key={msg._id || index} message={msg} />
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default Messages;
