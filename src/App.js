import React from "react";
import EnterName from "./components/enterName";
import useSetName from "./components/setName";
import ChatView from "./components/chatView";
import "./App.css";

function App() {
  const { view, name } = useSetName();
  console.log(name, name.length);
  return view === "enterName" ? <EnterName /> : <ChatView />;
}

export default App;
