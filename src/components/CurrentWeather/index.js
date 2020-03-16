import React from "react";
import styles from "./index.scss";
import { toFahrenheit } from "../../globals/functions";

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
      <img
        alt={weather.description}
        title={weather.description}
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
      />
      <div className={styles.temp}>{toFahrenheit(main.temp)}&deg;</div>
    </div>
  );
}

export default CurrentWeather;
