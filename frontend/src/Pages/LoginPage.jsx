/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setAuthUser } from "../redux/userSlice";
import { Flex } from "@chakra-ui/react";
import axios from "axios";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

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
      navigate("/");
      dispatch(setAuthUser(res.data));
    } catch (err) {
      toast.error(err.response.data.message); // Log the server error response
      console.log(err);
    }

    // setEmail("");
    // setPassword("");

    setUser({
      username: "",
      password: "",
    });
  };

  return <Flex></Flex>;
};

export default LoginPage;

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { setAuthUser } from "../redux/userSlice";
// import { Flex } from "@chakra-ui/react";
// import axios from "axios"; // Make sure to import axios

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // const [user, setUser] = useState({
//   //   email: "",
//   //   password: "",
//   // });

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         `http://localhost:8080/api/users/login`,
//         { email, password }, // Using the email and password state
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       navigate("/");
//       dispatch(setAuthUser(res.data));
//     } catch (err) {
//       toast.error(err.response.data.message); // Log the server error response
//       console.log(err);
//     }

//     // Clear the input fields
//     setEmail("");
//     setPassword("");

//     // setUser({
//     //   email: "",
//     //   password: "",
//     // });
//   };

//   return (
//     <Flex>
//       <form onSubmit={onSubmitHandler}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button type="submit">Login</button>
//       </form>
//     </Flex>
//   );
// };

// export default LoginPage;
