import React from 'react'
import style from "../styles/AdminNavbar.module.css";
import Image from "next/image"

function AdminNavbar() {
  let image_url =
    "https://www.pngkey.com/png/detail/933-9334152_small-g-suite-admin-logo.png";
  return (
    <div className={style.navbarContainer} >
      <Image src={image_url} width={70} height={70} alt="admin logo" className={style.navLogo}/>

        <h1>Admin Panel</h1>
      
    </div>
  )
}

export default AdminNavbar
