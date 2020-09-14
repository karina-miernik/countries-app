import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./Styling.module.css";
// import { Link } from "react-router";
const CountriesItem = ({ title, capital, img, id }) => {
  return (
    <Card
      bg="dark"
      variant="dark"
      style={{ width: "18rem" }}
      className={styles.countryItem}
    >
      {/* <Link to={`countries/${id}`} className={styles.link}> */}{" "}
      <Card.Img variant="top" src={img} />
      {/* </Link> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Capital: {capital}</Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
};

export default CountriesItem;
