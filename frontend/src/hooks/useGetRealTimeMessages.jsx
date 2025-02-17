/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import socket from "../socket"; // Import the singleton socket

const useGetRealTimeMessages = () => {
  const { socket } = useSelector((store) => store.socket);
  const { messages } = useSelector((store) => store.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      dispatch(setMessages([...messages, newMessage]));
    });
    return () => socket?.off("newMessage");
  }, [setMessages, messages, socket]);
};

export default useGetRealTimeMessages;
