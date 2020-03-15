import React from "react";
import Map from "./components/Map";
import { weatherApiUrlRoot, apiKey_OpenWeatherMaps } from "./globals/constants";
import styles from "./App.scss";

class App extends React.Component {
  state = {
    data: {},
    dataLoaded: false
  };

  async fetchApiData() {
    const weatherApiUrl = weatherApiUrlRoot + apiKey_OpenWeatherMaps;
    console.log(`*************************************************`);
    console.log(`fetching OpenWeatherMap API data: ${weatherApiUrl}`);
    console.log(`*************************************************`);
    await fetch(weatherApiUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(`#################################################`);
        console.log(data);
        console.log(`#################################################`);
        this.setState({
          dataLoaded: true,
          data
        });
      });
  }

  componentDidMount() {
    let apiCallDuration = 3000;
    console.log(`=================================================`);
    console.log(`*** App: componentDidMount() ***`);
    console.log(`-------------------------------------------------`);
    console.log(this.state);
    console.log(`-------------------------------------------------`);
    console.log(`=================================================`);
    this.fetchApiData();
  }

  componentDidUpdate() {
    console.log(`=================================================`);
    console.log(`*** App: componentDidUpdate() ***`);
    console.log(`-------------------------------------------------`);
    console.log(this.state);
    console.log(`-------------------------------------------------`);
    console.log(`=================================================`);
  }

  render() {
    const { dataLoaded } = this.state;
    return <div className={styles.App}>{dataLoaded && <Map />}</div>;
  }
}

export default App;
