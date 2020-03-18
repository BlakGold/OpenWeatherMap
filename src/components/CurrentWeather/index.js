import React from "react";
import moment from "moment";
import Icon from "../Icon";
import Temperature from "../Temperature";
import { getWindDirection } from "../../globals/functions";
import styles from "./index.scss";

function CurrentWeather(props) {
  const { currentWeather } = props;
  let { weather } = currentWeather;
  weather = weather[0];
  const { main, wind } = currentWeather;
  const day = moment()
    .format("dddd")
    .toUpperCase();

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
      <div className={styles.temp}>
        <Temperature kelvin={main.temp} />
      </div>
      <div className={styles.dayHiLo}>
        <div className={styles.day}>{day}</div>
        <div className={styles.hi}>
          high: <Temperature kelvin={main.temp_max} />
        </div>
        <div className={styles.lo}>
          low: <Temperature kelvin={main.temp_min} />
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.wind}>
        wind: {getWindDirection(wind.deg)} {wind.speed} mph
      </div>
    </div>
  );
}

export default CurrentWeather;
