import React from "react";

const SingleCountry = ({ country, weather }) => {
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
      <h1>Weather in {country.capital}</h1>
      <h2>temperature: {weather.main.temp} Celcius</h2>
      <img
        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        alt="weather"
        height="100"
        width="100"
      />
      <h1>
        Wind: {weather.wind.speed} direction {weather.wind.deg}{" "}
      </h1>
    </div>
  );
};

export default SingleCountry;
