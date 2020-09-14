import React, { useState, useEffect } from "react";
import CountriesItem from "./CountriesItem";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((r) => r.json())
      .then((countries) => {
        setCountries(countries);
        console.log(countries);
      });
  }, []);
  return (
    <>
      {countries.map((country) => {
        return (
          <CountriesItem
            title={country.name}
            capital={country.capital}
            img={country.flag}
          />
        );
      })}
    </>
  );
};

export default Countries;
