import React from "react";

function CitySelectMenu(props) {
  const { citiesByCountry, selectedCityId, onChange } = props;

  return (
    <select value={selectedCityId} onChange={onChange}>
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
