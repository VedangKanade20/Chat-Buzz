import { useSelector } from "react-redux";
import { Flex, Text, Input } from "@chakra-ui/react";
import { useState } from "react";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import OtherUser from "./OtherUser"; // Import the OtherUser component

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

      {/* Display filtered users using OtherUser component */}
      {filteredUsers.map((user) => (
        <OtherUser key={user._id} user={user} /> // Use OtherUser component
      ))}
    </Flex>
  );
};

export default ListOfUsers;
