import React, { useState } from "react";
import "./enterName.css";

export default function EnterName({ onEnterName }) {
  const [value, setValue] = useState();

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onEnterName(value);
  };

  return (
    <form className="nameForm" onSubmit={handleSubmit}>
      <input type="text" placeholder={"enter name"} onChange={handleChange} />
      <button type="submit">ok</button>
    </form>
  );
}
