import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder={"enter name"} onChange={handleChange} />
      <button type="submit">ok</button>
    </form>
  );
}
