import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Styling.module.css";
import { Link } from "react-router-dom";
// import styles from "./Styling.module.css";

const CountriesDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v2/all/?id=${id}`)
      .then((r) => r.json())
      .then((country) => {
        const arrayCountries = country
          ? Object.keys(country).map((key) => {
              return {
                id: key,
                ...country[key],
              };
            })
          : [];
        setCountry(arrayCountries);
        console.log(arrayCountries);
      });
  }, [id]);

  return (
    <>
      <div className={styles.container}>
        <Link to="/countries-app">
          {" "}
          <button className={styles.borderButton} style={{ margin: "1rem" }}>
            Go Back
          </button>
        </Link>

        {country.map(
          (country) =>
            country.id.toString() === id && (
              <>
                <div className={styles.countryWrapper}>
                  <div className={styles.countryImgWrapper}>
                    <img src={country.flag} />
                  </div>
                  <div className={styles.countryRightWrapper}>
                    <div className={styles.countryTitle}>
                      <h2>{country.name}</h2>
                    </div>
                    <div className={styles.countryTxtWrapper}>
                      <div className={styles.countryFirstCol}>
                        <p>
                          <b>Native Name:</b> {country.nativeName}
                        </p>
                        <p>
                          <b>Capital:</b> {country.capital}
                        </p>
                        <p>
                          <b>Region:</b> {country.region}
                        </p>
                      </div>
                      <div className={styles.countrySecCol}>
                        <p>
                          <b>Currency:</b>{" "}
                          {country.currencies.map((courency) => (
                            <span style={{ padding: "0.5rem" }}>
                              {courency.name}
                            </span>
                          ))}
                        </p>
                        <p>
                          <b>Languages:</b>{" "}
                          {country.languages.map((language) => (
                            <span style={{ padding: "0.5rem" }}>
                              {language.name}
                            </span>
                          ))}
                        </p>
                        <p>
                          <b>Borders:</b>{" "}
                          {country.borders.map((border) => {
                            return (
                              <>
                                <button className={styles.borderButton}>
                                  {border}
                                </button>
                              </>
                            );
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
        )}
      </div>
    </>
  );
};

export default CountriesDetails;
