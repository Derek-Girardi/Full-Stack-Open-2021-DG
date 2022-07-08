import React from "react";
import Countries from "./Countries";
import SingleCountry from "./SingleCountry";
import "../CountriesList.css";

const CountriesList = ({
  filteredList,
  showCountry,
  capitalChange,
  weather,
}) => {
  if (filteredList.length === 1) {
    capitalChange(filteredList[0].capital);
    return <SingleCountry country={filteredList[0]} weather={weather} />;
  } else if (filteredList.length > 1 && filteredList.length <= 10) {
    return (
      <>
        {filteredList.map((country, index) => (
          <>
            <div className="flexbox-container">
              <Countries key={country.name.common} name={country.name.common} />
              <button
                type="button"
                key={index}
                onClick={() => showCountry(country.name.common)}
              >
                show
              </button>
            </div>
          </>
        ))}
      </>
    );
  } else {
    return <div>Too many Countries, please refine search</div>;
  }
};

export default CountriesList;
