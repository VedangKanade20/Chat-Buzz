import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { API_URL } from "../apiConfig";

const useGetMessages = () => {
  const { selectedUser, authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const token = authUser?.token || localStorage.getItem("token");

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser?._id || !token) return;

      try {
        const res = await axios.get(
          `${API_URL}/api/chats/${selectedUser._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          },
        );

        // Ensure we only get messages for this specific chat
        const filteredMessages = res.data.filter(
          (msg) =>
            (msg.senderId === authUser?._id &&
              msg.receiverId === selectedUser._id) ||
            (msg.senderId === selectedUser._id &&
              msg.receiverId === authUser?._id),
        );

        dispatch(setMessages(filteredMessages));
      } catch (err) {
        console.error("Error fetching messages:", err);
        dispatch(setMessages([]));
      }
    };

    fetchMessages();
  }, [selectedUser?._id, token, dispatch, authUser?._id]);
};

export default useGetMessages;
