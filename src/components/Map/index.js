import React from "react";
import styles from "./index.scss";

function Map(props) {
  return (
    <iframe
      title="OpenWeatherMap"
      src={props.mapUrl}
      className={styles.map}
    ></iframe>
  );
}

export default Map;
