// import { Flex, Heading } from "@chakra-ui/react";

// const Header = () => {
//   return (
//     <Flex alignItems="center" justifyContent="start">
//       <Flex
//         bgColor="grey"
//         textColor="white"
//         w="20vw"
//         h="8vh"
//         alignItems="center"
//         justifyContent="top"
//         textAlign="center"
//         borderRadius="10p"
//       >
//         <Heading as="lg">Chat-Buzz</Heading>
//       </Flex>
//     </Flex>
//   );
// };

// export default Header;

import { Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="start"
      w="full"
      p="10px"
      bgColor="gray.800"
    >
      <Flex
        bgColor="gray.700"
        textColor="white"
        w="full"
        h="6vh"
        alignItems="center"
        textAlign="center"
        borderRadius="10px"
        p="10px"
      >
        <Heading as="h1" size="md">
          Chat-Buzz
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
