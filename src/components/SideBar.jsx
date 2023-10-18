import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
     
      <p>List of cities</p>
      <fottter className={styles.fottter}>
        <p className={styles.copyright}>
          {" "}
          &copy : Copyright {new Date().getFullYear()} by worldwise Inc.
        </p>
      </fottter>
    </div>
  );
}
