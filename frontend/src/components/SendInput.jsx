

import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { Box, Input, Button } from "@chakra-ui/react";

const SendInput = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.messages);
  const token = localStorage.getItem("token");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!message.trim()) return; // Prevent sending empty messages

    try {
      const res = await axios.post(
        `http://localhost:8070/api/chats/${selectedUser?._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      console.log("New Message Sent:", res.data);
      dispatch(setMessages([...messages, res.data])); // Add new message
    } catch (err) {
      console.error("Error sending message:", err);
    }

    setMessage(""); // Clear input field after sending
  };

  return (
    <Box
      as="form"
      onSubmit={onSubmitHandler}
      display="flex"
      alignItems="center"
    >
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        mr={2}
        variant="outline"
      />
      <Button type="submit" colorScheme="teal">
        Send
      </Button>
    </Box>
  );
};

export default SendInput;
