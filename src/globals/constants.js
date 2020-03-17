const US = "US";
const cityId_WashingtonDC = 4140963;

const apiKey_OpenWeatherMaps = "f81d9bcbe8e93533a28127f5134aa81a";

//const mapApiUrlRoot = "https://tile.openweathermap.org/map/"; // temp_new/3/7/7.png?appid=

const currentWeatherApiUrlRoot =
  "https://api.openweathermap.org/data/2.5/weather"; // ?id=2172797&appid=

const weatherForecastApiUrlRoot =
  "https://api.openweathermap.org/data/2.5/forecast"; // ?q=London,us&mode=json&appid=

const iconField = "{icon}";
const icon2xField = "@2x";
const iconUrlTemplate =
  "http://openweathermap.org/img/wn/" + iconField + "@2x.png";

export {
  US,
  cityId_WashingtonDC,
  apiKey_OpenWeatherMaps,
  /*mapApiUrlRoot,*/
  currentWeatherApiUrlRoot,
  weatherForecastApiUrlRoot,
  iconField,
  icon2xField,
  iconUrlTemplate
};
