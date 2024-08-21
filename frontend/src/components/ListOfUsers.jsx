import { useSelector } from "react-redux";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { Flex, Text, Image } from "@chakra-ui/react";

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
        <Flex
          key={user._id}
          w="18vw"
          h="10vh"
          borderStyle="dashed"
          mb="2"
          textAlign="center"
          fontSize="20px"
          _hover={{
            backgroundColor: "violet", // Change background color on hover
            cursor: "pointer", // Change cursor to pointer on hover
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
