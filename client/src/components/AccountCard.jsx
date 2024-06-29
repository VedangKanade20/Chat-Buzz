/* eslint-disable react/prop-types */
import { Flex, Image, Box, Text } from "@chakra-ui/react";
import ViewProfilePicture from "./ViewProfilePic";
// import users from "../../data/users";

const AccountCard = ({ user }) => {
  return (
    <Flex
      bgColor="gray.100"
      border="1px dashed"
      borderColor="gray.300"
      color="black"
      w="19vw"
      h="10vh"
      justifyContent="flex-start"
      alignItems="center"
      borderRadius="10px"
      p="10px"
      gap="10px"
    >
      <Image
        borderRadius="full"
        boxSize="60px"
        src={user.avatar.url}
        alt="Profile Picture"
        onClick={<ViewProfilePicture />}
      />
      <Box>
        <Text fontWeight="bold" fontSize="lg">
          {user.username}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {user.email}
        </Text>
      </Box>
    </Flex>
  );
};

export default AccountCard;
