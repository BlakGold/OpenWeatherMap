const toCelsius = kelvin => kelvin - 273;
const toFahrenheit = kelvin => Math.floor(toCelsius(kelvin) * (9 / 5) + 32);

export { toCelsius, toFahrenheit };
