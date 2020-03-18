import React from "react";

/* Temperature */
const toCelsius = kelvin => kelvin - 273;
const toFahrenheit = kelvin => Math.floor(toCelsius(kelvin) * (9 / 5) + 32);

/* Wind */
const getWindDirection = degrees => {
  const directions = [
    <>&#8595; N</>,
    <>&#8601; NE</>,
    <>&#8592; E</>,
    <>&#8598; SE</>,
    <>&#8593; S</>,
    <>&#8599; SW</>,
    <>&#8594; W</>,
    <>&#8600; NW</>
  ];
  const degree_increment = 360 / 8;
  const degreeOffset = degrees + degree_increment / 2;

  const direction =
    degreeOffset >= 0 * degree_increment && degreeOffset < 1 * degree_increment
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
  return direction;
};

export { toCelsius, toFahrenheit, getWindDirection };
