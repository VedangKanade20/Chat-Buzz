/* eslint-disable react/prop-types */
import { Flex, Image, Box, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


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
        boxSize="50px"
        src={user.avatar.url}
        alt="Profile Picture"
      />
      <Link as={RouterLink} to={`/${user._id}`}>
        <Box>
          <Text fontWeight="bold" fontSize="lg">
            {user.username}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {user.email}
          </Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default AccountCard;
