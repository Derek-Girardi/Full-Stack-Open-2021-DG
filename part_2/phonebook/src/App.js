import React, { useState } from "react";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import SearchFilter from "./components/SearchFilter";
import Form from "./components/Form";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const addName = (event) => {
    //this could be more precise but works for now, only checks EXACT names
    if (persons.some((item) => item.name === newName)) {
      event.preventDefault();
      window.alert(`${newName} is already added to phonebook`);
    } else {
      event.preventDefault();
      const personObject = {
        name: newName,
        number: newPhone,
        id: persons.length + 1,
      };
      setPersons(persons.concat(personObject));
    }
    setNewName("");
    setNewPhone("");
  };

  //This will call our add functions for the onSubmit field
  const handleFormInput = (event) => {
    addName(event);
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setNewPhone(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  let filteredPersons = persons;
  if (newFilter) {
    filteredPersons = persons.filter(
      (p) =>
        p.name.toLocaleLowerCase().indexOf(newFilter.toLocaleLowerCase()) !== -1
    );
  }
  return (
    <div>
      <Header text={"Phonebook"} />
      <SearchFilter value={newFilter} onChange={handleFilterChange} />
      <Header text={"add a new"} />
      <Form
        onSubmit={handleFormInput}
        nameValue={newName}
        nameChange={handleNameChange}
        numberValue={newPhone}
        numberChange={handlePhoneChange}
      />
      <Header text={"numbers"} />
      <PersonList filteredList={filteredPersons} />
    </div>
  );
};

export default App;
