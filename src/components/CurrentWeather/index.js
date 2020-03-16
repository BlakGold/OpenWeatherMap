import React from "react";
import Icon from "../Icon";
import { toFahrenheit } from "../../globals/functions";
import styles from "./index.scss";

function CurrentWeather(props) {
  const { currentWeather } = props;
  console.log(`*************************************************`);
  console.log(`currentWeather`);
  console.log(currentWeather);
  console.log(`*************************************************`);

  let { weather } = currentWeather;
  weather = weather[0];
  const { main } = currentWeather;

  return (
    <div className={styles.data}>
      <h1>
        Current Weather:{" "}
        <span className={styles.city}>{currentWeather.name}</span>
      </h1>
      <div className={styles.description}>{weather.description}</div>
      <Icon
        alt={weather.description}
        title={weather.description}
        icon={weather.icon}
      />
      <div className={styles.temp}>{toFahrenheit(main.temp)}&deg;</div>
    </div>
  );
}

export default CurrentWeather;
