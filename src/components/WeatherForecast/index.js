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
    <div className={styles.dataPanel}>
      <h1>5-Day Weather Forecast</h1>
      <table className={styles.forecastTable}>
        {list.map(timeFrame => {
          const weather = timeFrame.weather[0];
          const { main } = timeFrame;
          return (
            <tr className={styles.timeFrame}>
              <td className={styles.time}>24:00</td>
              <td className={styles.icon}>
                <Icon
                  className={styles.icon}
                  alt={weather.description}
                  title={weather.description}
                  icon={weather.icon}
                  small
                />
              </td>
              <td className={styles.description}>{weather.description}</td>
              <td className={styles.temp}>{toFahrenheit(main.temp)}&deg;</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default WeatherForecast;
