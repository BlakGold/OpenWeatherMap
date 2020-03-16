import React from "react";
import styles from "./index.scss";

function Map(props) {
  //console.log(`*************************************************`);
  //console.log(`fetching OpenWeatherMap API data: ${props.mapUrl}`);
  //console.log(`*************************************************`);
  return (
    <iframe
      title="OpenWeatherMap"
      src={props.mapUrl}
      className={styles.map}
    ></iframe>
  );
}

export default Map;
