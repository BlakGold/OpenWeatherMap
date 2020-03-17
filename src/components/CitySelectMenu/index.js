import React from "react";
import cities from "../../data/city.list.json";
import styles from "./index.scss";

function CitySelectMenu(props) {
  const { countryCode, selectedCityId, onChange } = props;
  const citiesByCountry = cities.filter(city => city.country === countryCode);

  return (
    <select className={styles.menu} value={selectedCityId} onChange={onChange}>
      {citiesByCountry.map(city => {
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
