import React from "react";
import styles from "./index.scss";

function WeatherForecast(props) {
  const { weatherForecast } = props;
  console.log(`*************************************************`);
  console.log(`weatherForecast`);
  console.log(weatherForecast);
  console.log(`*************************************************`);
  return (
    <div className={styles.data}>
      <h1>5-Day Weather Forecast</h1>
    </div>
  );
}

export default WeatherForecast;
