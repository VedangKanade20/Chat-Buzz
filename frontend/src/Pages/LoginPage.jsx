import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setAuthUser } from "../redux/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

  try {
    const res = await axios.post(
      `http://localhost:8080/api/users/login`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    navigate("/")
    dispatch(setAuthUser(res.data))
  } catch (err) {
    toast.error(error.response.data.message); // Log the server error response
    console.log(err)
  }
  const userLogin = useSelector((store) => store.userLogin);
  
  useEffect(() => {
    
  })

  return <div>LoginPage</div>;
  
};

export default LoginPage;
