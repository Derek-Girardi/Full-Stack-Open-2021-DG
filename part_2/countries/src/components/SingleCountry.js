import React from "react";

const SingleCountry = ({ country }) => {
  console.log(country);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        Capital: {country.capital}
        <br />
        Population: {country.population}
      </p>
      <h1>Languages</h1>
      <ul>
        {Object.values(country.languages).map((val, key) => (
          <li key={key}>{val}</li>
        ))}
      </ul>
      <p>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`} 
        height="200" 
        width="300" 
      />
      </p>
    </div>
  );
};

export default SingleCountry;
