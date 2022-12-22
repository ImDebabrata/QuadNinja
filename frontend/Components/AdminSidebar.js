import React from 'react'
import style from "../styles/AdminSidebar.module.css";

function AdminSidebar() {

  let userData = ["Dadhboard","Student","Solver"]

  return (
    <div className={style.sidebar}>
      <h3 className={style.header}>User Data</h3>
      <ul>
        {userData &&
          userData.map((item) => (
            <li>
              
              <span> {item}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AdminSidebar
