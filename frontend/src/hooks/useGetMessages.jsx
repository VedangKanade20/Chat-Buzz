import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);

  const dispatch = useDispatch(); //to dispatch actions from react

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8080/api/chats/${selectedUser?._id}`
        );
        console.log(res);
        dispatch(setMessages(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessages();
  }, [selectedUser?._id, setMessages]);
};

export default useGetMessages;
