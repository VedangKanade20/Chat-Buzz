// import { useDispatch, useSelector } from "react-redux";
// import useGetOtherUsers from "../hooks/useGetOtherUsers";
// import { Flex, Text, Image, Input } from "@chakra-ui/react";
// import { useState } from "react";
// import { setOtherUsers } from "../redux/userSlice";

// const ListOfUsers = () => {
//   const dispatch = useDispatch();

//   const otherUsers = useSelector((store) => store.user.otherUsers);
//   const [search, setSearch] = useState();

//   useGetOtherUsers();
//   // Early return if no users are found
//   if (otherUsers.length === 0) return <Text>No users found</Text>;

//   const searchSubmitHandler = (e) => {
//     e.preventDefault();
//     const usersToChatWith = otherUsers.find((user) =>
//       user.username.toLowerCase().includes(search.toLowerCase())
//     );

//     if (usersToChatWith) {
//       dispatch(setOtherUsers([usersToChatWith]));
//     } else {
//       console.error("User not found");
//     }
//   };

//   return (
//     <Flex direction="column">
//       <Flex direction="row">
//         <Input
//           placeholder="search"
//           type="search"
//           value={usersToChatWith}
//           onChange={(e) => setSearch({ ...user, email: e.target.value })}
//           bgColor="white"
//           color="black"
//           w="full"
//         />
//       </Flex>
//       {otherUsers.map((user) => (
//         <Flex
//           key={user._id}
//           w="18vw"
//           h="10vh"
//           borderStyle="dashed"
//           mb="2"
//           textAlign="center"
//           fontSize="20px"
//           _hover={{
//             backgroundColor: "violet", // Change background color on hover
//             cursor: "pointer", // Change cursor to pointer on hover
//           }}
//           borderRadius="10px"
//           bgColor="black"
//           flexDirection="row"
//         >
//           <Image
//             src={user?.picture}
//             alt={`${user?.username}'s profile picture`}
//             boxSize="40px"
//             borderRadius="full"
//             mr="10px"
//             w="50px"
//             h="7vh"
//             mt="10px"
//             ml="10px"
//           />
//           <Text ml="10px" mt="15px">
//             {user?.firstName}
//           </Text>
//           <Text ml="10px" mt="15px">
//             {user?.lastName}
//           </Text>
//         </Flex>
//       ))}
//     </Flex>
//   );
// };

// export default ListOfUsers;

// import { useDispatch, useSelector } from "react-redux";
// import useGetOtherUsers from "../hooks/useGetOtherUsers";
// import { Flex, Text, Image, Input } from "@chakra-ui/react";
// import { useState } from "react";
// import { setOtherUsers } from "../redux/userSlice";

// const ListOfUsers = () => {
//   const dispatch = useDispatch();

//   const otherUsers = useSelector((store) => store.user.otherUsers);
//   const [search, setSearch] = useState("");

//   // Custom hook to fetch users
//   useGetOtherUsers();

//   // Early return if no users are found
//   if (!otherUsers || otherUsers.length === 0)
//     return <Text>No users found</Text>;

//   const searchSubmitHandler = (e) => {
//     e.preventDefault();

//     // Filter users based on search input
//     const filteredUsers = otherUsers.filter((user) =>
//       user.username.toLowerCase().includes(search.toLowerCase())
//     );

//     if (filteredUsers.length > 0) {
//       dispatch(setOtherUsers(filteredUsers));
//     } else {
//       console.error("User not found");
//       dispatch(setOtherUsers([])); // Clear the users if no match is found
//     }
//   };

//   return (
//     <Flex direction="column">
//       <Flex
//         as="form"
//         onSubmit={searchSubmitHandler}
//         direction="row"
//         mt="1"
//         mb="2"
//       >
//         <Input
//           placeholder="Search users"
//           type="search"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           bgColor="white"
//           color="black"
//           w="full"
//         />
//       </Flex>
//       {otherUsers.map((user) => (
//         <Flex
//           key={user._id}
//           w="18vw"
//           h="10vh"
//           borderStyle="dashed"
//           mb="2"
//           textAlign="center"
//           fontSize="20px"
//           _hover={{
//             backgroundColor: "violet", // Change background color on hover
//             cursor: "pointer", // Change cursor to pointer on hover
//           }}
//           borderRadius="10px"
//           bgColor="black"
//           flexDirection="row"
//         >
//           <Image
//             src={user?.picture}
//             alt={`${user?.username}'s profile picture`}
//             boxSize="40px"
//             borderRadius="full"
//             mr="10px"
//             w="50px"
//             h="7vh"
//             mt="10px"
//             ml="10px"
//           />
//           <Text ml="10px" mt="15px">
//             {user?.firstName}
//           </Text>
//           <Text ml="10px" mt="15px">
//             {user?.lastName}
//           </Text>
//         </Flex>
//       ))}
//     </Flex>
//   );
// };

// export default ListOfUsers;

import { useSelector } from "react-redux";
import { Flex, Text, Image, Input } from "@chakra-ui/react";
import { useState } from "react";
import useGetOtherUsers from "../hooks/useGetOtherUsers";

const ListOfUsers = () => {
  const otherUsers = useSelector((store) => store.user.otherUsers);
  const [search, setSearch] = useState("");

  useGetOtherUsers();

  // Early return if no users are found
  if (!otherUsers || otherUsers.length === 0)
    return <Text>No users found</Text>;

  // Filter users based on search input
  const filteredUsers = otherUsers.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Flex direction="column">
      {/* Search input */}
      <Flex direction="row" mb="4">
        <Input
          placeholder="Search users"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          bgColor="white"
          color="black"
          w="full"
        />
      </Flex>

      {/* Display filtered users */}
      {filteredUsers.map((user) => (
        <Flex
          key={user._id}
          w="18vw"
          h="10vh"
          borderStyle="dashed"
          mb="2"
          textAlign="center"
          fontSize="20px"
          _hover={{
            backgroundColor: "violet",
            cursor: "pointer",
          }}
          borderRadius="10px"
          bgColor="black"
          flexDirection="row"
        >
          <Image
            src={user?.picture}
            alt={`${user?.username}'s profile picture`}
            boxSize="40px"
            borderRadius="full"
            mr="10px"
            w="50px"
            h="7vh"
            mt="10px"
            ml="10px"
          />
          <Text ml="10px" mt="15px">
            {user?.firstName}
          </Text>
          <Text ml="10px" mt="15px">
            {user?.lastName}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default ListOfUsers;
