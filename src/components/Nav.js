import React from "react";
import { Link } from "react-router-dom";
import styles from "./Styling.module.css";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to={`/`} className={styles.link}>
        Find a country
      </Link>
    </nav>
  );
};

export default Nav;
