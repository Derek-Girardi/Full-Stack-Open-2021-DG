import React from "react";
import Person from "./Person";

const PersonList = ({ filteredList }) => {
  return (
    <>
      {filteredList.map((person) => (
        <Person key={person.id} name={person.name} number={person.number} />
      ))}
    </>
  );
};

export default PersonList;
