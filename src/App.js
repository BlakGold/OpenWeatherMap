import React from "react";
import Map from "./components/Map";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";
import {
  mapApiUrlRoot,
  currentWeatherApiUrlRoot,
  weatherForecastApiUrlRoot,
  apiKey_OpenWeatherMaps
} from "./globals/constants";
import styles from "./App.scss";

class App extends React.Component {
  state = {
    currentWeather: {},
    weatherForecast: {},
    currentWeatherDataLoaded: false,
    weatherForecastDataLoaded: false,
    mapUrl: `${mapApiUrlRoot}${apiKey_OpenWeatherMaps}`
  };

  async fetchApiData() {
    const currentWeatherApiUrl =
      currentWeatherApiUrlRoot + apiKey_OpenWeatherMaps;
    const weatherForecastApiUrl =
      weatherForecastApiUrlRoot + apiKey_OpenWeatherMaps;
    console.log(`*************************************************`);
    console.log(`fetching OpenWeatherMap API data: ${currentWeatherApiUrl}`);
    console.log(`fetching OpenWeatherMap API data: ${weatherForecastApiUrl}`);
    console.log(`*************************************************`);
    await fetch(currentWeatherApiUrl)
      .then(response => {
        return response.json();
      })
      .then(currentWeather => {
        console.log(`#################################################`);
        console.log(currentWeather);
        console.log(`#################################################`);
        this.setState({
          currentWeatherDataLoaded: true,
          currentWeather
        });
      });
    await fetch(weatherForecastApiUrl)
      .then(response => {
        return response.json();
      })
      .then(weatherForecast => {
        console.log(`#################################################`);
        console.log(weatherForecast);
        console.log(`#################################################`);
        this.setState({
          weatherForecastDataLoaded: true,
          weatherForecast
        });
      });
  }

  componentDidMount() {
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
    const {
      currentWeather,
      currentWeatherDataLoaded,
      weatherForecast,
      weatherForecastDataLoaded,
      mapUrl
    } = this.state;
    return (
      <>
        {currentWeatherDataLoaded && (
          <CurrentWeather currentWeather={currentWeather} />
        )}
        {weatherForecastDataLoaded && (
          <WeatherForecast weatherForecast={weatherForecast} />
        )}
        {mapUrl && (
          <div className={styles.App}>
            <Map mapUrl={mapUrl} />
          </div>
        )}
      </>
    );
  }
}

export default App;
