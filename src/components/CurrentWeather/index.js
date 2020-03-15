import React from "react";
import styles from "./index.scss";

function CurrentWeather(props) {
  const { currentWeather } = props;
  return <div className={styles.data}>{JSON.stringify(currentWeather)}</div>;
}

export default CurrentWeather;
