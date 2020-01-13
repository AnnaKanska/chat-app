import { useState } from "react";

export default function useSetName() {
  const [name, setName] = useState("");
  const [view, setView] = useState("enterName");

  return {
    name,
    setName,
    view,
    setView
  };
}
