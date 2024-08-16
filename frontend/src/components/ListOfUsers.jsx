import { useSelector } from "react-redux";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { Flex, Text } from "@chakra-ui/react";

const ListOfUsers = () => {
  // Fetch users using the custom hook
  useGetOtherUsers();

  // Access the users from the Redux store
  const otherUsers = useSelector((store) => store.user.otherUsers);

  // Early return if no users are found
  if (otherUsers.length === 0) return <Text>No users found</Text>;

  return (
    <Flex direction="column">
      {otherUsers.map((user) => (
        <Text key={user._id}>{user?.firstName}</Text> // Ensure each item has a unique key
      ))}
    </Flex>
  );
};

export default ListOfUsers;
