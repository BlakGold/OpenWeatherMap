import React from "react";
import CitySelectMenu from "./components/CitySelectMenu";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";
import {
  apiKey_OpenWeatherMaps,
  currentWeatherApiUrlRoot,
  weatherForecastApiUrlRoot,
  US,
  cityId_WashingtonDC
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

  fetchApiData() {
    const { selectedCityId } = this.state;

    const currentWeatherApiUrl =
      currentWeatherApiUrlRoot +
      "?id=" +
      selectedCityId +
      "&mode=json" +
      "&appid=" +
      apiKey_OpenWeatherMaps;

    const weatherForecastApiUrl =
      weatherForecastApiUrlRoot +
      "?id=" +
      selectedCityId +
      "&mode=json" +
      "&appid=" +
      apiKey_OpenWeatherMaps;

    const currentWeather = fetch(currentWeatherApiUrl);
    const weatherForecast = fetch(weatherForecastApiUrl);

    const promises = [currentWeather, weatherForecast];

    Promise.all(promises)
      .then(response => {
        return Promise.all(response.map(r => r.json()));
      })
      .then(([currentWeather, weatherForecast]) => {
        this.setState({
          currentWeatherDataLoaded: true,
          currentWeather,
          weatherForecastDataLoaded: true,
          weatherForecast
        });
      })
      .catch(err => console.log(err));
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
