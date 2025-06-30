import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/messageSlice";
import { Box, Input, Button } from "@chakra-ui/react";

const SendInput = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const token = localStorage.getItem("token");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!message.trim() || !selectedUser?._id) return;

    try {
      const res = await axios.post(
        `http://localhost:8070/api/chats/${selectedUser._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      dispatch(addMessage(res.data));
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <Box
      as="form"
      onSubmit={onSubmitHandler}
      display="flex"
      alignItems="center"
      p={2}
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
