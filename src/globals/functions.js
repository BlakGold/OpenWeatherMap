const toCelsius = kelvin => kelvin - 273;
const toFahrenheit = kelvin => Math.floor(toCelsius(kelvin) * (9 / 5) + 32);

const getWindDirection = degrees => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]; // clockwise
  const degree_increment = 360 / 8;
  const degreeOffset = degrees + degree_increment / 2;

  return degreeOffset >= 0 * degree_increment &&
    degreeOffset < 1 * degree_increment
    ? directions[0]
    : degreeOffset >= 1 * degree_increment &&
      degreeOffset < 2 * degree_increment
    ? directions[1]
    : degreeOffset >= 2 * degree_increment &&
      degreeOffset < 3 * degree_increment
    ? directions[2]
    : degreeOffset >= 3 * degree_increment &&
      degreeOffset < 4 * degree_increment
    ? directions[3]
    : degreeOffset >= 4 * degree_increment &&
      degreeOffset < 5 * degree_increment
    ? directions[4]
    : degreeOffset >= 5 * degree_increment &&
      degreeOffset < 6 * degree_increment
    ? directions[5]
    : degreeOffset >= 6 * degree_increment &&
      degreeOffset < 7 * degree_increment
    ? directions[6]
    : directions[7];
};

export { toCelsius, toFahrenheit, getWindDirection };
