import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const useGetOtherUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true; // important line to remember for CORS ERROR......
        const res = await axios.get(`http://localhost:8080/api/users/`);

        //store
        console.log("Other users->", res);
        dispatch(setOtherUsers(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchOtherUsers(); //function called here
  }, [dispatch]);
};

export default useGetOtherUsers;
