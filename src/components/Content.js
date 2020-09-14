import React from "react";
import Form from "./Form";
import Sorting from "./Sorting";
import PageWrapper from "./PageWrapper";
import Countries from "./Countries";
import styles from "./Styling.module.css";
const Content = () => {
  return (
    <>
      <PageWrapper>
        <div className={styles.formContainer}>
          <Form />
          <Sorting />
        </div>
        <div className={styles.countriesWrapper}>
          <Countries className={styles.countries} />
        </div>
      </PageWrapper>
    </>
  );
};

export default Content;
