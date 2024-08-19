import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem("token");

        // Make the request to the backend with the token in the Authorization header
        const res = await axios.get(
          "http://localhost:8080/api/users/usersList/",
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
        console.log("Token received:", token);

        // Optionally update the token if needed
        const newToken = res.data.token;
        if (newToken) {
          localStorage.setItem("token", newToken);
        }
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
