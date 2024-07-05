// import { Flex, Spinner } from "@chakra-ui/react";

// const Loader = () => {
//   return (
//     <Flex alignItems="center" justifyContent="center">
//       <Spinner
//         thickness="4px"
//         speed="0.65s"
//         emptyColor="gray.200"
//         color="blue.500"
//         size="xl"
//       />
//     </Flex>
//   );
// };

// export default Loader;

import { Box, Center } from "@chakra-ui/react";
import "@lottiefiles/lottie-player"; // Ensure you have lottie-player as a dependency

function Loading() {
  return (
    <Box height="100vh" bg="#fff">
      <Center height="100%">
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_cud2yjlq.json"
          background="transparent"
          speed="1"
          style={{ width: "150px", height: "150px" }}
          loop
          autoplay
        ></lottie-player>
      </Center>
    </Box>
  );
}

export default Loading;
