// import React, { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";

// const Message = ({ message }) => {
//   const scroll = useRef(); // react-hook........

//   const { authUser, selectedUser } = useSelector((store) => store.user);

//   useEffect(() => {
//     scroll.current?.scrollIntoView({ behavior: "smooth" });
//   }, [message]);

//   return (
//     <div
//       ref={scroll}
//       className={`chat ${
//         authUser?._id === message?.senderId ? "chat-end" : "chat-start "
//       }`}
//     >
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS chat bubble component"
//             src={
//               message?.senderId === authUser?._id
//                 ? authUser?.profilePhoto
//                 : selectedUser?.profilePhoto
//             }
//           />
//         </div>
//       </div>
//       <div className="chat-header">
//         <time className="text-xs opacity-50 text-white">12:45</time>
//       </div>
//       <div
//         className={`chat-bubble ${
//           message?.senderId !== authUser?._id ? "bg-gray-200 text-black" : ""
//         } `}
//       >
//         {message?.message}
//       </div>
//     </div>
//   );
// };

// export default Message;

// import { Box, Flex, Image, Text } from "@chakra-ui/react";
// import { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";

// const Message = (message) => {
//   const scroll = useRef();

//   const { authUser, selectedUser } = useSelector((store) => store.user);

//   useEffect(() => {
//     scroll.current?.scrollIntoView({ behavior: "smooth" });
//   }, [message]);

//   return (
//     <Flex
//       ref={scroll}
//       direction="column"
//       align={authUser?._id === message?.senderId ? "flex-end" : "flex-start"}
//       mb="4"
//     >
//       <Flex alignItems="center" mb="2">
//         <Image
//           w="35px"
//           src={
//             message?.senderId === authUser?._id
//               ? authUser?.picture
//               : selectedUser?.picture
//           }
//           alt="Profile Phto"
//           mr="2"
//         />
//         <Text fontSize="s" opacity="0.5" color="white">
//           12:45
//         </Text>
//       </Flex>
//       <Box
//         bg={message?.senderId !== authUser?._id ? "gray.200" : "blue.500"}
//         color={message?.senderId !== authUser?._id ? "black" : "white"}
//         borderRadius="lg"
//         p={3}
//         maxW="80%"
//       >
//         {message?.message || "No message available"}
//       </Box>
//     </Flex>
//   );
// };

// export default Message;

// here--------->

import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Box, Avatar, Text, Flex } from "@chakra-ui/react";

const Message = ({ message }) => {
  const scroll = useRef(); // react-hook........

  const { authUser, selectedUser } = useSelector((store) => store.user);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  
  const isSender = authUser?._id === message?.senderId;
  if (!message?.chatId) {
    console.warn("⚠️ Skipping message with missing chatId:", message);
    return null;
  }

  return (
    <Flex
      ref={scroll}
      direction="column"
      align={isSender ? "flex-end" : "flex-start"}
      mb={4}
    >
      <Flex align="center" gap={2}>
        <Avatar
          size="sm"
          src={isSender ? authUser?.profilePhoto : selectedUser?.profilePhoto}
        />
        <Text fontSize="xs" color="gray.500">
          12:45
        </Text>
      </Flex>
      <Box
        maxW="70%"
        bg={isSender ? "blue.500" : "gray.200"}
        color={isSender ? "white" : "black"}
        px={4}
        py={2}
        borderRadius="lg"
        alignSelf={isSender ? "flex-end" : "flex-start"}
      >
        {message?.message}
      </Box>
    </Flex>
  );
};

export default Message;
