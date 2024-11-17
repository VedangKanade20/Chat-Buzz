import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const { authUser } = useSelector((store) => store.user); // Assuming authUser contains the token

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser?._id || !authUser?.token) return; // Ensure token and user exist

      try {
        const res = await axios.get(
          `http://localhost:8070/api/chats/${selectedUser?._id}`,
          {
            headers: {
              Authorization: `Bearer ${authUser.token}`, // Add the token to the Authorization header
            },
            withCredentials: true, // Ensure credentials are sent if needed
          }
        );
        console.log(res.data);
        dispatch(setMessages(res.data));
      } catch (err) {
        console.log(err);
      }
    };

    fetchMessages();
  }, [selectedUser, authUser, dispatch]);
};

export default useGetMessages;
