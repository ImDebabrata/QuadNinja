import React, { useState } from "react";
import styles from "./login.module.css";
import axios from "axios";
import { useRouter } from "next/router";

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
    axios.post("http://localhost:8080/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };

  return (
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
      <div className={styles.button} onClick={() => history.push("/register")}>
        Create New Account
      </div>
    </div>
  );
};

export default Login;
