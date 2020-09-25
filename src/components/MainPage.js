import React from "react";

import PageWrapper from "./PageWrapper";
import Countries from "./Countries";
import styles from "./Styling.module.css";

const MainPage = () => {
    return <>
        <PageWrapper>
            <div className={styles.countriesWrapper}>
                <Countries className={styles.countries} />
            </div>
        </PageWrapper>
    </>
}

export default MainPage