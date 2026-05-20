import React, { useState, useEffect } from "react";
import CountriesItem from "./CountriesItem";
import Loader from "./Loader";
import Form from "./Form";
import styles from "./Styling.module.css";
import { Alert } from "react-bootstrap";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags")
            .then((r) => {
                if (!r.ok) {
                  throw new Error(`HTTP error: ${r.status}`);
                }
                return r.json();
            })
            .then((countries) => {
                const arrayCountries = countries
                    ? Object.keys(countries).map((key) => {
                          return {
                              id: key,
                              ...countries[key],
                          };
                      })
                    : [];
                setCountries(arrayCountries);
                setIsLoading(false);
            })
            .catch((err) => {
              setError(err.message);
              setIsLoading(false);
            });
    }, []);

    const handleOnFormChange = (text) => {
        setText(text);
    };
    if (error) {
        return (
            <Alert key={"danger"} variant={"danger"} className="mt-5" >
                {` Oops, something went wrong! ${error}`}
            </Alert>
        );
    }
    return (
        <>
            <div className={styles.formContainer}>
                <Form
                    filter={text}
                    onFormChange={handleOnFormChange}
                    value={text}
                />
            </div>
            <div className={styles.countriesWrapper}>
            {isLoading ? (
                <Loader />
            ) : (
                countries

                    .filter((country) => {
                        const countryName = country.name?.official || "";
                        return countryName
                            .toLowerCase()
                            .includes(text.toLowerCase());
                    })
                    .map((country) => {
                        return (
                            <CountriesItem
                                title={country.name?.official || ""}
                                capital={country.capital[0]}
                                img={country.flags.png}
                                key={country.id}
                                id={country.id}
                            />
                        );
                    })
            )}
            </div>
        </>
    );
};

export default Countries;
