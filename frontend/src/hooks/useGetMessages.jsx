// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setMessages } from "../redux/messageSlice";

// const useGetMessages = () => {
//   const { selectedUser } = useSelector((store) => store.user);
//   const { authUser } = useSelector((store) => store.user);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchMessages = async () => {
//       if (!selectedUser?._id || !authUser?.token) return; // Ensure token and user exist

//       try {
//         const res = await axios.get(
//           `http://localhost:8070/api/chats/${selectedUser._id}`,

//           {
//             headers: {
//               Authorization: `Bearer ${authUser.token}`,
//             },
//             withCredentials: true,
//           }
//         );
//         console.log(selectedUser, "This is user selected");
//         console.log("Fetched Messages:", res.data);
//         dispatch(setMessages(res.data || "No message available"));
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchMessages();
//   }, [selectedUser, authUser, dispatch]);
// };

// export default useGetMessages;

import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
  const { selectedUser, authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedUser?._id || !authUser?.token) return;

      try {
        const res = await axios.get(
          `http://localhost:8070/api/chats/${selectedUser._id}`,
          {
            headers: {
              Authorization: `Bearer ${authUser.token}`,
            },
            withCredentials: true,
          }
        );
        dispatch(setMessages(res.data.length ? res.data : []));
      } catch (err) {
        console.log(err);
        dispatch(setMessages([])); // Set empty messages if error occurs
      }
    };
    fetchMessages();
  }, [selectedUser, authUser, dispatch]);
};

export default useGetMessages;
