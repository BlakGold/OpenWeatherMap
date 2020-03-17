import React from "react";
import Icon from "../Icon";
import { toFahrenheit } from "../../globals/functions";
import styles from "./index.scss";

function WeatherForecast(props) {
  const { weatherForecast } = props;
  const { list } = weatherForecast;

  return (
    <div className={styles.dataPanel}>
      <h1>5-Day Weather Forecast</h1>
      <table className={styles.forecastTable}>
        <tbody>
          {list.map(timeFrame => {
            const weather = timeFrame.weather[0];
            const { main } = timeFrame;
            return (
              <tr
                className={styles.timeFrame}
                key={timeFrame.dt}
                title={weather.description}
              >
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
        </tbody>
      </table>
    </div>
  );
}

export default WeatherForecast;
