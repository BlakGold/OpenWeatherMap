const US = "US";
const cityIds_Top50_inUS = [
  5128581,
  5368361,
  4887398,
  4699066,
  4560349,
  5308655,
  4726206,
  5391811,
  4684888,
  5392171,
  4671654,
  4160021,
  5391959,
  4259418,
  4509177,
  4691930,
  4460243,
  5809844,
  5419384,
  5520993,
  4990729,
  4140963,
  4930956,
  4641239,
  4644585,
  5746545,
  4544349,
  5506956,
  4347778,
  4299276,
  5263045,
  5454711,
  5318313,
  5350937,
  5389489,
  4273837,
  5367929,
  5304391,
  4180439,
  5417598,
  4791259,
  4487042,
  5074472,
  4164138,
  5378538,
  5037649,
  4553433,
  4281730,
  4335045,
  4671240
];
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
  cityIds_Top50_inUS,
  cityId_WashingtonDC,
  apiKey_OpenWeatherMaps,
  /*mapApiUrlRoot,*/
  currentWeatherApiUrlRoot,
  weatherForecastApiUrlRoot,
  iconField,
  icon2xField,
  iconUrlTemplate
};
