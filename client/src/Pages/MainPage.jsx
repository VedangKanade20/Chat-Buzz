import { Flex, Text } from "@chakra-ui/react";
import SideBar from "../components/SideBar";

const MainPage = () => {
  return (
    <Flex alignItems="center" justifyContent="center" p="1vw">
      <Flex
        bgColor="green.100"
        w="24vw"
        h="89vh"
        alignItems="center"
        justifyContent="center"
        borderRadius="5px"
        overflowY="auto"
        direction="row"
      >
        <Flex
          bgColor="green.900"
          textColor="white"
          w="4vw"
          h="89vh"
          justifyContent="center"
          borderRadius="5px"
        >
          <SideBar />
        </Flex>
        <Flex
          bgColor="green.400"
          textColor="white"
          w="20vw"
          h="89vh"
          alignItems="center"
          justifyContent="center"
        >
          <Text>This is a list area</Text>
        </Flex>
      </Flex>
      <Flex
        bgColor="green.700"
        w="74vw"
        h="89vh"
        alignItems="center"
        justifyContent="center"
        textColor="white"
        borderRadius="5px"
        overflowY="auto"
      >
        <Text>This is a message area </Text>
      </Flex>
    </Flex>
  );
};

export default MainPage;
