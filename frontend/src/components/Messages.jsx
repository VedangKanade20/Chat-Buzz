import useGetRealTimeMessages from "../hooks/useGetRealTimeMessages";
import useGetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";
import Message from "./Message";
import { Flex } from "@chakra-ui/react";

const Messages = () => {
  useGetRealTimeMessages();
  useGetMessages();

  const { messages } = useSelector((store) => store.message);
  return (
    <Flex overflow="auto" px={4} flex="1">
      {messages &&
        messages.map((message) => {
          return <Message key={message._id} message={message} />;
        })}
    </Flex>
  );
};

export default Messages;
