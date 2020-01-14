import React from "react";
import EnterName from "./components/enterName/enterName";
import useSetName from "./components/setName";
import ChatView from "./components/chatView/chatView";
import "./App.css";

function App() {
  const { view, setView, name, setName } = useSetName();

  const handleEnterName = value => {
    setName(value);
    setView("chatView");
  };

  return view === "enterName" ? (
    <EnterName onEnterName={handleEnterName} />
  ) : (
    <ChatView name={name} />
  );
}

export default App;
