// import useGetRealTimeMessages from "../hooks/useGetRealTimeMessages";
// import useGetMessages from "../hooks/useGetMessages";
// import { useSelector } from "react-redux";
// import Message from "./Message";
// import { Flex } from "@chakra-ui/react";

// const Messages = () => {
//   useGetRealTimeMessages();
//   useGetMessages();

//   const { messages } = useSelector((store) => store.messages);
//   return (
//     <Flex overflow="auto" px={4} flex="1">
//       {messages &&
//         messages.map((message) => {
//           return <Message key={message._id || "No message available"} message={message} />;
//         })}
//     </Flex>
//   );
// };

// export default Messages;

import useGetRealTimeMessages from "../hooks/useGetRealTimeMessages";
import useGetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";
import Message from "./Message";
import { Flex } from "@chakra-ui/react";

const Messages = () => {
  useGetRealTimeMessages();
  useGetMessages();

  const { messages } = useSelector((store) => store.messages);

  return (
    <Flex overflow="auto" px={4} flex="1">
      {messages &&
        messages.map((message, index) => {
          if (!message || !message._id) {
            console.warn("Skipping invalid message:", message);
            return null; // Skip rendering if message is null/undefined
          }
          return <Message key={message._id || index} message={message} />;
        })}
    </Flex>
  );
};

export default Messages;
