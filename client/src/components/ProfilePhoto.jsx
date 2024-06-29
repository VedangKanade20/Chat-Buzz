/* eslint-disable react/prop-types */
import { Image } from "@chakra-ui/react";

const ProfilePicture = ({ url, onOpen }) => {
  return (
    <Image
      borderRadius="full"
      boxSize="60px"
      src={url}
      alt="Profile Picture"
      onClick={onOpen}
      cursor="pointer"
    />
  );
};

export default ProfilePicture;
