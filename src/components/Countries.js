import React, { useState, useEffect } from "react";
import CountriesItem from "./CountriesItem";
import Loader from './Loader'
import Form from './Form'
import styles from "./Styling.module.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [text, setText] = useState('')

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((r) => r.json())
      .then((countries) => {
        const arrayCountries = countries
          ? Object.keys(countries).map((key) => {
            return {
              id: key,
              ...countries[key],
            }
          })
          : []
        setCountries(arrayCountries);
        setIsLoading(false)
      });
  }, []);

  const handleOnFormChange = (text) => {
    setText(text)
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

      {
        isLoading
          ? <Loader />

          : countries

            .filter(country => {
              return country.name.toLowerCase()
                .includes(text.toLowerCase());

            })
            .map((country) => {
              return (
                <CountriesItem
                  title={country.name}
                  capital={country.capital}
                  img={country.flag}
                  key={country.id}
                  id={country.id}
                />

              );
            })


      }
    </>
  );
};

export default Countries;
