import React from "react";
import styles from "./Card.module.css";
import wind from "../images/wind.png";

const Card = ({ image, country, city, temp, weather, windSpeed }) => {
  return (
    <div className={`col-xl-3 col-lg-4 col-md-5 col-sm-7 col-8 ${styles.card}`}>
      <div id={styles.weatherImage}>
        <img src={image} alt="weather" width="40" />
      </div>

      <div id={styles.weatherLocation}>
        <h3>{`${country}, ${city}`}</h3>
        <span>now</span>
      </div>

      <div id={styles.weatherType}>
        <h3>Weather: {weather}</h3>
        <p>Temperature: {temp} °</p>
        <img src={image} alt="weather" width="30" />
      </div>
      <div id={styles.windType}>
        <h3>Wind speed:</h3>
        <div style={{ marginTop: "15px" }}>
          <img
            src={wind}
            alt="wind icon"
            width="30"
            style={{ marginRight: "10px" }}
          />
          <span>{windSpeed.toFixed(2)} m/s</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
