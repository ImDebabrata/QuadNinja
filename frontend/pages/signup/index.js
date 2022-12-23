import React, { useState } from "react";
import styles from "../../styles/register.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { baseUrl } from "../api";
import Navbar from "../../Components/Navbar/Navbar";

const Register = () => {
  const history = useRouter();

  const [user, setUser] = useState({
    name: "",
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

  const register = () => {
    let { name, email, password, reEnterPassword } = user;

    if (name && email && password) {
      axios
        .post(`${baseUrl}/signup`, user)
        .then((res) => {
          console.log("res:", res);
          alert(res.data.message);
          history.push("/login");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      alert("invalid input");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.register}>
        {console.log("User", user)}
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
        <div className={styles.button} onClick={register}>
          Create New Account
        </div>
        <div>or</div>
        <div className={styles.button} onClick={() => history.push("/login")}>
          Login
        </div>
      </div>
    </>
  );
};

export default Register;
