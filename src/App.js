import React from "react";
import styles from "./App.scss";
import Map from "./components/Map";

function App() {
  return (
    <div className={styles.App}>
      <h1>OpenWeatherMap</h1>
      <p>A demo of OpenWeatherMap API.</p>
      <Map />
    </div>
  );
}

export default App;
