import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import styles from "./Styling.module.css";
import { Link } from "react-router-dom";

const CountriesItem = ({ title, capital, img, id }) => {
  // const [countries, setCountries] = useState([])
  // useEffect(() => {
  //   fetch(`https://restcountries.eu/rest/v2/all`)
  //     .then((r) => r.json())
  //     .then((countries) => {
  //       setCountries(countries)
  //       console.log(countries);
  //     });
  // }, [])

  return (
    <Card style={{ width: "18rem" }} className={styles.countryItem}>
      <Link to={`/countries-app/${id}`} className={styles.link}>
        <Card.Img variant="top" src={img} />
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Capital: {capital}</Card.Text>
        <div className={styles.countryButtonWrapper}>
          <Link to={`/countries-app/${id}`} className={styles.link}>
            <button className={styles.countryButton}>More</button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CountriesItem;
