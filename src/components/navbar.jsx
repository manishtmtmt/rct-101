import React from "react";
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <>
      <div>LOGOBAKERY</div>
      <div className={styles.links}>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
      </div>
      <div>
        <button>Contact</button>
      </div>
    </>
  );
};

export { Navbar };
