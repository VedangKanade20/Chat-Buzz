import { useSelector } from "react-redux";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { Box, Flex, Text } from "@chakra-ui/react";

const ListOfUsers = () => {
  // Access the users from the Redux store
  const otherUsers = useSelector((store) => store.user.otherUsers);
  // Fetch users using the custom hook

  useGetOtherUsers();
  // Early return if no users are found
  if (otherUsers.length === 0) return <Text>No users found</Text>;
  if (otherUsers.length === 3) return <Text>users found</Text>;

  return (
    <Flex direction="column">
      {otherUsers.map((user) => (
        <Box
          key={user._id}
          w="18vw"
          h="10vh"
          borderStyle="dashed"
          mb="2"
          textAlign="left"
          fontSize="20px"
          _hover={{
            backgroundColor: "violet", // Change background color on hover
            cursor: "pointer", // Change cursor to pointer on hover
          }}
          borderRadius="10px"
          bgColor="black"
        >
          <Text ml="10px">{user?.username}</Text>
        </Box>
      ))}
    </Flex>
  );
};

export default ListOfUsers;
