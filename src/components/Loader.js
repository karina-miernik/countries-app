import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from "./Styling.module.css";

const Loader = () => {
    return <div className={styles.spinner}>
      <Spinner animation="border" variant="info" />
    </div>
}

export default Loader