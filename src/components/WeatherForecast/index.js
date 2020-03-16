import React from "react";
import Icon from "../Icon";
import { toFahrenheit } from "../../globals/functions";
import styles from "./index.scss";

function WeatherForecast(props) {
  const { weatherForecast } = props;
  const { list } = weatherForecast;
  console.log(`*************************************************`);
  console.log(`weatherForecast`);
  console.log(weatherForecast);
  console.log(`*************************************************`);
  return (
    <div className={styles.data}>
      <h1>5-Day Weather Forecast</h1>
      {list.map(timeFrame => {
        const weather = timeFrame.weather[0];
        const { main } = timeFrame;
        return (
          <div className={styles.timeFrame}>
            <Icon
              alt={weather.description}
              title={weather.description}
              icon={weather.icon}
            />
            {weather.description}
            <div className={styles.temp}>{toFahrenheit(main.temp)}&deg;</div>
          </div>
        );
      })}
    </div>
  );
}

export default WeatherForecast;
