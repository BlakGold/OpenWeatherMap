import React from "react";
import moment from "moment";
import Icon from "../Icon";
import Temperature from "../Temperature";
import styles from "./index.scss";

function WeatherForecast(props) {
  const { weatherForecast } = props;
  const { list } = weatherForecast;

  return (
    <div className={styles.dataPanel}>
      <h2>5-Day Weather Forecast</h2>
      <table className={styles.forecastTable}>
        <tbody>
          {list.map(timeFrame => {
            const weather = timeFrame.weather[0];
            const { main } = timeFrame;
            const formattedDateTime = moment(timeFrame.dt_txt).format(
              "ddd, MMM D, ha"
            );
            return (
              <tr
                className={styles.timeFrame}
                key={timeFrame.dt}
                title={weather.description}
              >
                <td className={styles.datetime}>{formattedDateTime}</td>
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
                <td className={styles.temp}>
                  <Temperature kelvin={main.temp} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WeatherForecast;
