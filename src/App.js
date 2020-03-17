import React from "react";
import CitySelectMenu from "./components/CitySelectMenu";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";
import {
  US,
  cityId_WashingtonDC,
  currentWeatherApiUrlRoot,
  weatherForecastApiUrlRoot,
  apiKey_OpenWeatherMaps
} from "./globals/constants";
import styles from "./App.scss";

class App extends React.Component {
  state = {
    countryCode: US,
    selectedCityId: cityId_WashingtonDC,
    currentWeather: {},
    weatherForecast: {},
    currentWeatherDataLoaded: false,
    weatherForecastDataLoaded: false
  };

  async fetchApiData() {
    const { selectedCityId } = this.state;

    const currentWeatherApiUrl =
      currentWeatherApiUrlRoot +
      "?id=" +
      selectedCityId +
      "&appid=" +
      apiKey_OpenWeatherMaps;

    const weatherForecastApiUrl =
      weatherForecastApiUrlRoot +
      "?id=" +
      selectedCityId +
      "&mode=json&appid=" +
      apiKey_OpenWeatherMaps;

    await fetch(currentWeatherApiUrl)
      .then(response => {
        return response.json();
      })
      .then(currentWeather => {
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
        this.setState({
          weatherForecastDataLoaded: true,
          weatherForecast
        });
      });
  }

  componentDidMount() {
    this.fetchApiData();
  }

  onCitySelectMenuChange = evt => {
    const selectedCityId = evt.target.value;
    this.setState({ selectedCityId }, () => this.fetchApiData());
  };

  render() {
    const { countryCode, selectedCityId } = this.state;
    const {
      currentWeather,
      currentWeatherDataLoaded,
      weatherForecast,
      weatherForecastDataLoaded
    } = this.state;
    return (
      <div className={styles.App}>
        <CitySelectMenu
          countryCode={countryCode}
          selectedCityId={selectedCityId}
          onChange={this.onCitySelectMenuChange}
        />
        {currentWeatherDataLoaded && (
          <CurrentWeather currentWeather={currentWeather} />
        )}
        {weatherForecastDataLoaded && (
          <WeatherForecast weatherForecast={weatherForecast} />
        )}
      </div>
    );
  }
}

export default App;
