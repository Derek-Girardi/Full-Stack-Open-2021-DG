import React from "react";
import Countries from "./Countries";
import SingleCountry from "./SingleCountry";

const CountriesList = ({ filteredList }) => {
  if (filteredList.length === 1) {
    return <SingleCountry country={filteredList[0]}/>;
  } else if (filteredList.length > 1 && filteredList.length <= 10) {
    return (
      <>
        {filteredList.map((country) => (
          <Countries key={country.name.common} name={country.name.common} />
        ))}
      </>
    );
  } else {
    return <div>Too many Countries, please refine search</div>;
  }
};

export default CountriesList;
