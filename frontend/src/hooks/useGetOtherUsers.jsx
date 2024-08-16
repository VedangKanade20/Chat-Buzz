import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        // Retrieve token from localStorage (or other storage mechanism)
        const token = localStorage.getItem("token");

        console.log("Token retrieved:", token);
        // or sessionStorage, Redux store, etc.

        // Make the request to the backend with the token in the Authorization header
        const res = await axios.get(
          "http://localhost:8080/api/users/usersList",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Ensure token is sent in the correct format
            },
            withCredentials: true, // Include credentials like cookies, if needed
          }
        );
        // Store the data in Redux
        console.log("Other users->", res.data);
        dispatch(setOtherUsers(res.data));
      } catch (err) {
        console.log(
          "Error fetching other users:",
          err.response ? err.response.data : err.message
        );
      }
    };

    fetchOtherUsers(); // Call the function
  }, [dispatch]); // Dependency array to avoid re-running unnecessarily
};

export default useGetOtherUsers;
