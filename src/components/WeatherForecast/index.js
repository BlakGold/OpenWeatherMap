import React from "react";
import styles from "./index.scss";

function WeatherForecast(props) {
  const { weatherForecast } = props;
  return <div className={styles.data}>{JSON.stringify(weatherForecast)}</div>;
}

export default WeatherForecast;
