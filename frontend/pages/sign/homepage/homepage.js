import React from "react"
import styles from "./homepage.module.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className={styles.homepage}>
            <h1>Homepage</h1>
            <div className={styles.button} onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage