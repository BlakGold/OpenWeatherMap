import React from "react";
import { toFahrenheit } from "../../globals/functions";

function Temperature(props) {
  const { kelvin } = props;

  return <>{toFahrenheit(kelvin)}&deg;</>;
}

export default Temperature;
