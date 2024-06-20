import { TfiSaveAlt } from "react-icons/tfi";
import { MdOutlineChat } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaPenFancy } from "react-icons/fa";
import { Flex, Icon, Spacer, Link } from "@chakra-ui/react";
import { BsClockHistory } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link as RouterLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <Flex
        bgColor="green.900"
        textColor="white"
        direction="column"
        gap="20px"
        w="4vw"
        h="89vh"
        justifyContent="center"
        borderRadius="5px"
        alignItems="center"
        p="1vw"
        ml="1vw"
      >
        <Flex direction="column" mt="5px" gap="20px">
          {/* CHATS */}
          <Link as={RouterLink} to="/">
            <Icon
              as={MdOutlineChat}
              w="30px"
              h="30px"
              name="Chats"
              title="Chats"
              _hover={{
                color: "grey",
                transform: "scale(1.1)",
                transition: "transform 0.2s, color 0.2s",
              }}
            />
          </Link>
          {/* STORY */}
          <Link as={RouterLink} to="/story">
            <Icon
              as={BsClockHistory}
              w="30px"
              h="30px"
              name="Story"
              title="Story"
              _hover={{
                color: "grey",
                transform: "scale(1.1)",
                transition: "transform 0.2s, color 0.2s",
              }}
            />
          </Link>
          {/* CHANNEL */}
          <Link as={RouterLink} to="/channel">
            <Icon
              as={IoIosPeople}
              w="30px"
              h="30px"
              name="Channel"
              title="Channel"
              _hover={{
                color: "grey",
                transform: "scale(1.1)",
                transition: "transform 0.2s, color 0.2s",
              }}
            />
          </Link>
          {/* WRITE */}
          <Link as={RouterLink} to="/write">
            <Icon
              as={FaPenFancy}
              w="30px"
              h="30px"
              name="Write"
              title="Write"
              _hover={{
                color: "grey",
                transform: "scale(1.1)",
                transition: "transform 0.2s, color 0.2s",
              }}
            />
          </Link>
        </Flex>
        {/* SAVED MESSAGES */}
        <Link as={RouterLink} to="/savedMessage">
          <Icon
            as={TfiSaveAlt}
            w={{ base: "20px", md: "25px", lg: "30px" }}
            h={{ base: "20px", md: "25px", lg: "30px" }}
            name="savedMessage"
            title="savedMessage"
            _hover={{
              color: "grey",
              transform: "scale(1.1)",
              transition: "transform 0.2s, color 0.2s",
            }}
          />
        </Link>

        <Spacer />

        {/* PROFILE ICON */}
        <Flex direction="column" gap="20px" alignItems="end">
          <Link as={RouterLink} to="/profile">
            <Icon
              as={CgProfile}
              w="30px"
              h="30px"
              name="Profile"
              title="Profile"
              _hover={{
                color: "grey",
                transform: "scale(1.1)",
                transition: "transform 0.2s, color 0.2s",
              }}
            />
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default SideBar;
