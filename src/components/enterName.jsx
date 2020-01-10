import React from "react";
import useSetName from "./setName";

export default function EnterName() {
  const { handleChange, handleSubmit } = useSetName("");

  //   const handleSubmit = e => {
  //     e.preventDe1fault();
  //     setView("chatView");

  //     console.log("submitting", view);
  //   };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder={"enter name"} {...handleChange} />
      <button type="submit">ok</button>
    </form>
  );
}
