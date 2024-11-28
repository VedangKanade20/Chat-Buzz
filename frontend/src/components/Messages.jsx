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
        messages.map((message) => {
          return <Message key={message._id || "No message available"} message={message} />;
        })}
    </Flex>
  );
};

export default Messages;
