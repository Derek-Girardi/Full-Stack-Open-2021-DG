import React from "react";

const Form = ({
  onSubmit,
  nameValue,
  nameChange,
  numberValue,
  numberChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={nameValue} onChange={nameChange} />
      </div>
      <div>
        number:
        <input
          type="tel"
          pattern="[0-9\-]+"
          value={numberValue}
          onChange={numberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;