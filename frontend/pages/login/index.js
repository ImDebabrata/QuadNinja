import React, { useState } from "react";
import styles from "../../styles/login.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import {baseUrl} from "../api"

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
    if(user.email && user.password){
      console.log(user)
    axios.post(`${baseUrl}/login`, user).then((res) => {
      alert(res.data.message);
      // setLoginUser(res.data.user);
      history.push("/");
    })
    .catch((err)=>{
      alert(err.response.data.message);

    })
  }
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
      <div className={styles.button} onClick={() => history.push("/signup")}>
        Create New Account
      </div>
    </div>
  );
};

export default Login;
