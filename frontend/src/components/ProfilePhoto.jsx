/* eslint-disable react/prop-types */


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

const ProfilePicture = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const avatarUrl = user?.avatar?.url;

  if (!avatarUrl) {
    return null; // or you can render a placeholder image or some other content
  }

  return (
    <>
      <Image
        onClick={onOpen}
        borderRadius="full"
        boxSize="60px"
        src={avatarUrl}
        alt="Profile Picture"
        cursor="pointer"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile Picture</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={avatarUrl} alt="Profile Picture" boxSize="100%" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePicture;
