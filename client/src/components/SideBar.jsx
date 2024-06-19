// import { MdOutlineChat } from "react-icons/md";
// import { IoIosPeople } from "react-icons/io";
// import { FaPenFancy } from "react-icons/fa";
// import { Flex } from "@chakra-ui/react";
// import { BsClockHistory } from "react-icons/bs";
// import { IoSettingsOutline } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";

// const SideBar = () => {
//   return (
//     <>
//       <Flex
//         bgColor="green.900"
//         textColor="white"
//         direction="column"
//         mt="10px"
//         gap="20px"
//       >
//         <Flex direction="column" mt="5px" gap="20px">
//           <MdOutlineChat size="28px" name="Chats" title="Chats" />
//           <BsClockHistory size="28px" name="Story" title="Story" />
//           <IoIosPeople size="28px" name="Channel" title="Channel" />
//           <FaPenFancy size="28px" name="Write" title="Write" />
//         </Flex>

//         <Flex direction="column" mt="5px" gap="20px" alignItems="end">
//           <IoSettingsOutline size="28px" name="Settings" title="Settinngs" />

//           <CgProfile size="28px" name="Profile" title="Profile" />
//         </Flex>
//       </Flex>
//     </>
//   );
// };

// export default SideBar;

import { MdOutlineChat } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaPenFancy } from "react-icons/fa";
import { Flex, Spacer } from "@chakra-ui/react";
import { BsClockHistory } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const SideBar = () => {
  return (
    <>
      <Flex
        bgColor="green.900"
        textColor="white"
        direction="column"
        mt="10px"
        gap="20px"
        p="10px"
      >
        <Flex direction="column" mt="5px" gap="20px">
          <MdOutlineChat size="28px" name="Chats" title="Chats" />
          <BsClockHistory size="28px" name="Story" title="Story" />
          <IoIosPeople size="28px" name="Channel" title="Channel" />
          <FaPenFancy size="28px" name="Write" title="Write" />
        </Flex>

        <Spacer />

        <Flex direction="column" gap="20px" alignItems="end">
          <IoSettingsOutline size="28px" name="Settings" title="Settings" />
          <CgProfile size="28px" name="Profile" title="Profile" />
        </Flex>
      </Flex>
    </>
  );
};

export default SideBar;
