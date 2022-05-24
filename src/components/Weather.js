import React, { useEffect, useState } from "react";
import { getCityWeather } from "../services/api";
import Card from "./Card";
import styles from "./Weather.module.css";

const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState({});
  const [search, setSearch] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        if (search === false) setSearch("tehran");
        setCity(await getCityWeather(search));
        setLoading(false);
        setError(false);
      } catch {
        setError("The city you are looking for doesn't exist.");
      }
    };
    fetchAPI();
  }, [search]);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div id={styles.weather} className="container">
      <div className="row">
        <div id={styles.search} className="col-xl-12 mx-auto">
          <div>
            <input
              type="text"
              id={styles.weatherSearchInput}
              className="w-64"
              name="weatherSearchInput"
              placeholder="City..."
              value={search}
              onChange={searchHandler}
            />
          </div>

          {error && (
            <span
              class="text-danger col-xl-12 d-block"
              style={{ marginTop: "10px" }}
            >
              {error}
            </span>
          )}
        </div>

        {loading ? (
          <span class="p-4">Loading...</span>
        ) : (
          <Card
            image={`http://openweathermap.org/img/wn/${city["weather"][0].icon}.png`}
            country={city.sys.country}
            city={city.name}
            temp={city.main.temp}
            weather={city["weather"][0].main}
            windSpeed={city.wind.speed}
          />
        )}
      </div>
    </div>
  );
};

export default Weather;
