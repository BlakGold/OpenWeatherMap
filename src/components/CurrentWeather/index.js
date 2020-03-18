import React from "react";
import Icon from "../Icon";
import { toFahrenheit } from "../../globals/functions";
import styles from "./index.scss";

function CurrentWeather(props) {
  const { currentWeather } = props;
  let { weather } = currentWeather;
  weather = weather[0];
  const { main } = currentWeather;

  return (
    <div className={styles.dataPanel}>
      <h1>
        Current Weather
        <br />
        <span className={styles.city}>{currentWeather.name}</span>
      </h1>
      <div className={styles.description}>{weather.description}</div>
      <Icon
        alt={weather.description}
        title={weather.description}
        icon={weather.icon}
      />
      <div className={styles.temp}>{toFahrenheit(main.temp)}&deg;</div>
      <hr className={styles.hr} />
    </div>
  );
}

export default CurrentWeather;
