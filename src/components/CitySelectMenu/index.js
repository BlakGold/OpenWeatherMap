import React from "react";
import cities from "../../data/city.list.json";
import { US, cityIds_Top50_inUS } from "../../globals/constants";
import styles from "./index.scss";

function CitySelectMenu(props) {
  const { countryCode, selectedCityId, onChange } = props;
  let filteredCities = cities
    .filter(city => city.country === countryCode)
    .sort((city1, city2) => {
      if (city1.name > city2.name) {
        return 1;
      }
      return -1;
    });
  if (countryCode === US) {
    filteredCities = filteredCities.filter(city =>
      cityIds_Top50_inUS.includes(city.id)
    );
  }

  return (
    <select className={styles.menu} value={selectedCityId} onChange={onChange}>
      {filteredCities.map(city => {
        const fullCityName = `${city.name}, ${
          city.state ? `${city.state}, ` : ""
        }${city.country}`;
        return (
          <option value={city.id} key={city.id}>
            {fullCityName}
          </option>
        );
      })}
    </select>
  );
}

export default CitySelectMenu;
