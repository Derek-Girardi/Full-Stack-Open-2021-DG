import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";
import CountriesList from "./components/CountriesList";

function App() {
  const [newQuery, setNewQuery] = useState("");
  const [country, setCountry] = useState([]);
  const [weather, setWeather] = useState([]);
  const [capital, setCapital] = useState("Tokyo");

  const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`;

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountry(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [capital, API_KEY]);

  const handleSearchChange = (event) => {
    setNewQuery(event.target.value);
  };

  const handleShowCountry = (countryName) => {
    setNewQuery(countryName);
  };

  const handleCapitalChange = (capital) => {
    setCapital(capital);
  };

  let filteredCountry = country;

  if (newQuery) {
    filteredCountry = country.filter(
      (c) => c.name.common.toLowerCase().indexOf(newQuery.toLowerCase()) !== -1
    );
  }

  return (
    <div>
      <Search value={newQuery} onChange={handleSearchChange} />
      <CountriesList
        filteredList={filteredCountry}
        showCountry={handleShowCountry}
        capitalChange={handleCapitalChange}
        weather={weather}
      />
    </div>
  );
}

export default App;
