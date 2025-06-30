import { useSelector } from "react-redux";
import { Flex, Text, Input } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import OtherUser from "./OtherUser";

const ListOfUsers = () => {
  const otherUsers = useSelector((store) => store.user.otherUsers);
  const [search, setSearch] = useState("");

  useGetOtherUsers(); // This must always run

  const filteredUsers = useMemo(
    () =>
      otherUsers?.filter((user) =>
        user.username.toLowerCase().includes(search.toLowerCase())
      ) ?? [],
    [otherUsers, search]
  );

  if (!otherUsers || otherUsers.length === 0) {
    return <Text>No users found</Text>;
  }

  return (
    <Flex direction="column">
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

      {filteredUsers.map((user) => (
        <OtherUser key={user._id} user={user} />
      ))}
    </Flex>
  );
};

export default ListOfUsers;
