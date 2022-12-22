import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminSidebar from '../Components/AdminSidebar'
import style from "../styles/AdminDashboard.module.css";

function AdminDashboard() {
  return (
    <div className={style.dashboard} >
        <AdminNavbar/>
        <div className={style.container} >
            <AdminSidebar/>
            <div className={style.statics} > Statics</div>
        </div>
      
    </div>
  )
}

export default AdminDashboard
