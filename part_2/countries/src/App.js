import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";
import CountriesList from "./components/CountriesList";
import Countries from "./components/Countries";

function App() {
  const [newSearch, setNewSearch] = useState("");
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountry(response.data);
    });
  }, []);

  //console.log("render", country[0].name.common, "notes");

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setNewSearch(event.target.value);
  };

  let filteredCountry = country;

  if (newSearch) {
    filteredCountry = country.filter(
      (c) =>
        c.name.common.toLowerCase().indexOf(newSearch.toLowerCase()) !== -1
    );
  }

  return (
    <div>
      <Search value={newSearch} onChange={handleSearchChange} />
      <CountriesList filteredList={filteredCountry} />
    </div>
  );
}

export default App;
