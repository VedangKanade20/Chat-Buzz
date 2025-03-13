import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
  const { selectedUser, authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const token = authUser?.token || localStorage.getItem("token");

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser?._id || !token) return;

      try {
        const res = await axios.get(
          `http://localhost:8070/api/chats/${selectedUser._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        console.log("Fetched Messages:", res.data); // Debugging

        dispatch(setMessages(Array.isArray(res.data) ? res.data : []));
      } catch (err) {
        console.error("Error fetching messages:", err);
        dispatch(setMessages(Array.isArray(res.data) ? res.data : [])); // Set empty messages if error occurs
      }
    };

    fetchMessages();
  }, [selectedUser, token, dispatch]);
};

export default useGetMessages;
