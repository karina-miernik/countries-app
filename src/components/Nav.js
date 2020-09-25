import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./Styling.module.css";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to={`/countries-app`} className={styles.link}>
        Find a country
      </Link>
    </nav>
  );
};

export default Nav;
