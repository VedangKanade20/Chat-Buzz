import {
  Flex,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
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
import { useEffect } from "react";

const LeftSide = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isLogoutOpen,
    onOpen: onLogoutOpen,
    onClose: onLogoutClose,
  } = useDisclosure();

  const userInfo = useSelector((state) => state.user.authUser);

  useEffect(() => {
    if (userInfo) {
      dispatch(setAuthUser(userInfo));
    }
  }, [userInfo, dispatch]);

  const handleLogout = async () => {
    dispatch(logout()); // Dispatch the logout action
    navigate("/login");
  };

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
            onClick={onLogoutOpen} // Trigger the logout confirmation modal
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
            <p>Username: {userInfo?.username || "N/A"}</p>
            <p>Email: {userInfo?.email || "N/A"}</p>
            <Button mt={4} colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Logout Confirmation Modal */}
      <Modal isOpen={isLogoutOpen} onClose={onLogoutClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Logout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to logout?</ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleLogout} mr={3}>
              Logout
            </Button>
            <Button variant="ghost" onClick={onLogoutClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeftSide;
