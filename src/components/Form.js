import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import styles from "./Styling.module.css";

const Form = ({ filter, onFormChange }) => {

  const handleOnChange = (e) => {
    onFormChange(e.target.value)
  }


  return (
    <>
      <div className={styles.formWrapper}>
        <FormControl className={styles.form}
          placeholder="Search..."
          aria-label="Search..."
          onChange={handleOnChange}
          value={filter}
        />
      </div>
    </>
  );
};

export default Form;
