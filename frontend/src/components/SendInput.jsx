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

    try {
      console.log("Auth Token:", token);

      const res = await axios.post(
        `http://localhost:8070/api/chats/send/${selectedUser?._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      console.log("Auth Token:", token);
      console.log("New Message Sent:", res.data);
      if (res.data.newMessage) {
        dispatch(setMessages([...messages, res.data.newMessage]));
      } else {
        console.error("Received undefined message from backend:", res.data);
      }

      dispatch(setMessages([...messages, res.data.newMessage])); // Add new message
    } catch (err) {
      console.log(err);
    }
    setMessage(""); // Clear input field
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
        mr={2} // Margin right for spacing between input and button
        variant="outline"
      />
      <Button type="submit" colorScheme="teal">
        Send
      </Button>
    </Box>
  );
};

export default SendInput;

// import axios from "axios";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setMessages } from "../redux/messageSlice";
// import { Box, Input, Button } from "@chakra-ui/react";

// const SendInput = () => {
//   const [message, setMessage] = useState("");
//   const dispatch = useDispatch();

//   const { authUser, selectedUser } = useSelector((store) => store.user);
//   const { messages } = useSelector((store) => store.messages);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (!authUser || !authUser.token) {
//       console.error("User is not authenticated!");
//       return;
//     }

//     if (!selectedUser || !selectedUser._id) {
//       console.error("No user selected!");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         `http://localhost:8070/api/chats/send/${selectedUser._id}`,
//         { message },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${authUser.token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       console.log("New Message Sent:", res.data);
//       dispatch(setMessages([...messages, res.data.newMessage])); // Add new message
//     } catch (err) {
//       console.error("Error Sending Message:", err.response?.data || err);
//     }

//     setMessage(""); // Clear input field
//   };

//   return (
//     <Box
//       as="form"
//       onSubmit={onSubmitHandler}
//       display="flex"
//       alignItems="center"
//     >
//       <Input
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type your message..."
//         mr={2} // Margin right for spacing
//         variant="outline"
//       />
//       <Button type="submit" colorScheme="teal">
//         Send
//       </Button>
//     </Box>
//   );
// };

// export default SendInput;
