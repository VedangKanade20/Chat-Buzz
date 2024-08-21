import {
  Flex,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Header from "./Header";
import ListOfUsers from "./ListOfUsers";
import { FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { FaRegCircleUser } from "react-icons/fa6";
import { setAuthUser } from "../redux/userSlice.jsx";

const LeftSide = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const userInfo = useSelector((state) => state.user.authUser);

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logout()); // Correctly dispatch the logout action
    navigate("/login");
  };

  dispatch(setAuthUser(userInfo));

  return (
    <>
      <Flex
        backgroundColor="gray.900"
        borderStyle="dotted"
        borderColor="red"
        textColor="white"
        w="20vw"
        h="80vh"
        alignItems="center"
        direction="column"
        borderRadius="10px"
        p="5px"
        gap="5px"
      >
        <Header />
        <Box gap="15px" overflowY="auto">
          <Box w="100">
            <ListOfUsers />
          </Box>
        </Box>
        <Flex w="100" h="10vh" direction="row" gap="90px">
          <Link
            to="#"
            onClick={handleLogout}
            style={{ position: "relative", textDecoration: "none" }}
            title="Logout"
          >
            <FaPowerOff size="25" />
          </Link>
          <FaRegCircleUser
            style={{ position: "relative", textDecoration: "none" }}
            title="Profile"
            size="25"
            cursor="pointer"
            onClick={onOpen}
          />
        </Flex>
      </Flex>

      {/* Modal for user information */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Display user information */}
            <p>Username: {userInfo?.username || "N/A"}</p>
            <p>Email: {userInfo?.email || "N/A"}</p>
            <Button mt={4} colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeftSide;
