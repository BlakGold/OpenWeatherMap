import React from "react";
import styles from "./index.scss";

function CurrentWeather(props) {
  const { currentWeather } = props;
  console.log(`*************************************************`);
  console.log(`currentWeather`);
  console.log(currentWeather);
  console.log(`*************************************************`);
  return <div className={styles.data}>{JSON.stringify(currentWeather)}</div>;
}

export default CurrentWeather;
