import React from "react";
import CitySelectMenu from "./components/CitySelectMenu";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForecast from "./components/WeatherForecast";
import cities from "./data/city.list.json";
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
    citiesByCountry: [],
    selectedCityId: cityId_WashingtonDC,
    currentWeather: {},
    weatherForecast: {},
    currentWeatherDataLoaded: false,
    weatherForecastDataLoaded: false
  };

  filterCitiesByCountry() {
    const { countryCode } = this.state;
    const citiesByCountry = cities.filter(city => city.country === countryCode);
    console.log(citiesByCountry);
    this.setState({ citiesByCountry });
  }

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
    //console.log(`*************************************************`);
    //console.log(`fetching OpenWeatherMap API data: ${currentWeatherApiUrl}`);
    //console.log(`fetching OpenWeatherMap API data: ${weatherForecastApiUrl}`);
    //console.log(`*************************************************`);
    await fetch(currentWeatherApiUrl)
      .then(response => {
        return response.json();
      })
      .then(currentWeather => {
        //console.log(`#################################################`);
        //console.log(currentWeather);
        //console.log(`#################################################`);
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
        //console.log(`#################################################`);
        //console.log(weatherForecast);
        //console.log(`#################################################`);
        this.setState({
          weatherForecastDataLoaded: true,
          weatherForecast
        });
      });

    this.filterCitiesByCountry();
  }

  componentDidMount() {
    //console.log(`=================================================`);
    //console.log(`*** App: componentDidMount() ***`);
    //console.log(`-------------------------------------------------`);
    //console.log(this.state);
    //console.log(`-------------------------------------------------`);
    //console.log(`=================================================`);
    this.fetchApiData();
  }

  componentDidUpdate(prevProps) {
    //console.log(`=================================================`);
    //console.log(`*** App: componentDidUpdate() ***`);
    //console.log(`-------------------------------------------------`);
    //console.log(this.state);
    //console.log(`-------------------------------------------------`);
    //console.log(`=================================================`);
  }

  onCitySelectMenuChange = evt => {
    console.log(`onCitySelectMenuChange`);
    console.log(evt.target.value);
    const selectedCityId = evt.target.value;
    this.setState({ selectedCityId }, () => this.fetchApiData());
  };

  render() {
    const { citiesByCountry, selectedCityId } = this.state;
    const {
      currentWeather,
      currentWeatherDataLoaded,
      weatherForecast,
      weatherForecastDataLoaded
    } = this.state;
    return (
      <div className={styles.App}>
        <CitySelectMenu
          citiesByCountry={citiesByCountry}
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
