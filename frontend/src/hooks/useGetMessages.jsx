import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const { authUser } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      // if (!selectedUser?._id || !authUser?.token) return; // Ensure token and user exist

      try {
        const res = await axios.get(
          `http://localhost:8070/api/chats/${selectedUser?._id}`,
          {
            headers: {
              Authorization: `Bearer ${authUser.token}`,
            },
            withCredentials: true,
          }
        );
        console.log(selectedUser, "This is user selected");
        console.log(res);
        dispatch(setMessages(res.data || "No message available"));
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessages();
  }, [selectedUser, authUser, dispatch]);
};

export default useGetMessages;

// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setMessages } from "../redux/messageSlice";

// const useGetMessages = () => {
//   const { selectedUser } = useSelector((store) => store.user);

//   const dispatch = useDispatch(); // to dispatch actions from redux store.....

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         axios.defaults.withCredentials = true;
//         const res = await axios.get(
//           `http://localhost:8070/api/chats/${selectedUser?._id}`
//         );
//         console.log(res);
//         dispatch(setMessages(res.data));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchMessages();
//   }, [selectedUser?._id, setMessages]);
// };

// export default useGetMessages;
