import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./Styling.module.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const CountriesItem = ({ title, capital, img, id }) => {
    return (
        <Card style={{ width: "18rem" }} className={styles.countryItem}>
            <Link to={`/countries-app/${title}`} className={styles.link}>
                <Card.Img variant="top" src={img} />
            </Link>
            <Card.Body className={styles.cardWrapper}>
                <Container>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Capital: {capital}</Card.Text>
                </Container>

                <div className={styles.countryButtonWrapper}>
                    <Link
                        to={`/countries-app/${title}`}
                        className={styles.link}
                    >
                        <button className={styles.countryButton}>More</button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CountriesItem;
