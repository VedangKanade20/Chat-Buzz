// import { Flex } from "@chakra-ui/react";

// const AccountCard = () => {
//   return (
//     <Flex
//       bgColor="grey"
//       borderStyle="dashed"
//       textColor="black"
//       w="19vw"
//       h="10vh"
//       justifyContent="center"
//       borderRadius="10px"
//       p="3px"
//       gap="3px"
//     >
//       This is a card
//     </Flex>
//   );
// };

// export default AccountCard;

import { Flex, Image, Box, Text } from "@chakra-ui/react";

const AccountCard = () => {
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
        src=" https://www.computerhope.com/issues/pictures/win10-user-account-default-picture.png"
        // "https://via.placeholder.com/60"
        //https://www.shutterstock.com/image-vector/my-account-profile-user-icon-260nw-1700343232.jpg
        alt="Profile Picture"
      />
      <Box>
        <Text fontWeight="bold" fontSize="lg">
          John Doe
        </Text>
        <Text fontSize="sm" color="gray.600">
          Hey there! I am using WhatsApp.
        </Text>
      </Box>
    </Flex>
  );
};

export default AccountCard;
