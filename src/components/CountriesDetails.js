import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Styling.module.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { Alert } from "react-bootstrap";

const CountriesDetails = () => {
    const { id } = useParams();
    const [country, setCountry] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${id}?fullText=true`)
            .then((r) => {
                if (!r.ok) {
                    throw new Error(`HTTP error: ${r.status}`);
                }
                return r.json();
            })
            .then((country) => {
                setCountry(country[0]);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) return <Loader variant="global" />;
    if (error) {
        return (
            <Alert key={"danger"} variant={"danger"} className="mt-5">
                {` Oops, something went wrong! ${error}`}
            </Alert>
        );
    }
    if (!country) return null;

    return (
        <>
            <div className={styles.container}>
                <Link to="/">
                    {" "}
                    <button
                        className={styles.borderButton}
                        style={{ margin: "1rem" }}
                    >
                        Go Back
                    </button>
                </Link>
                <>
                    <div className={styles.countryWrapper}>
                        <div className={styles.countryImgWrapper}>
                            <img src={country.flags?.png} alt="country" />
                        </div>
                        <div className={styles.countryRightWrapper}>
                            <div className={styles.countryTitle}>
                                <h2>{country.name?.official}</h2>
                            </div>
                            <div className={styles.countryTxtWrapper}>
                                <div className={styles.countryFirstCol}>
                                    <p>
                                        <b>Capital:</b>{" "}
                                        {country.capital
                                            ? country.capital
                                                  .map((c) => c)
                                                  .join(", ")
                                            : "-"}
                                    </p>
                                    <p>
                                        <b>Region:</b> {country.region}
                                    </p>
                                </div>
                                <div className={styles.countrySecCol}>
                                    <p>
                                        <b>Currency:</b>{" "}
                                        <span style={{ padding: "0.5rem" }}>
                                            {country.currencies
                                                ? Object.values(
                                                      country.currencies
                                                  )
                                                      .map((curr) => curr.name)
                                                      .join(", ")
                                                : "-"}
                                        </span>
                                    </p>
                                    <p>
                                        <b>Languages:</b>{" "}
                                        <span style={{ padding: "0.5rem" }}>
                                            {country.languages
                                                ? Object.values(
                                                      country.languages
                                                  ).join(", ")
                                                : "-"}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </>
    );
};

export default CountriesDetails;
