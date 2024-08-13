import { useSelector } from "react-redux";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { Flex } from "@chakra-ui/react";

const ListOfUsers = () => {
  useGetOtherUsers();
  //custom hook
  const { otherUsers } = useSelector((store) => store.user);

  if (!otherUsers) return; // early return in react
  return (
    <Flex direction="column">
      {otherUsers?.map((user) => {
        return <ListOfUsers key={user._id} user={user} />;
      })}
    </Flex>
  );
};

export default ListOfUsers;
