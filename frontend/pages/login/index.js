import React, { useState } from "react";
import styles from "../../styles/login.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { baseUrl } from "../api";
import Navbar from "../../Components/Navbar/Navbar";

const Login = ({ setLoginUser }) => {
  const history = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    if (user.email && user.password) {
      axios
        .post(`${baseUrl}/login`, user)
        .then((res) => {
          alert(res.data.message);
          console.log(res);
          localStorage.setItem("login_user", JSON.stringify(res.data.user));
          // setLoginUser(res.data.user);
          history.push("/");
        })
        .catch((err) => {
          // console.log("err:", err);
          alert(err.response?.data?.message);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.login}>
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        ></input>
        <div className={styles.button} onClick={login}>
          Login
        </div>
        <div>or</div>
        <div className={styles.button} onClick={() => history.push("/signup")}>
          Create New Account
        </div>
      </div>
    </>
  );
};

export default Login;
