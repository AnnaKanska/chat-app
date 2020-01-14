import React, { useState } from "react";
import MessageDisplay from "./messageDisplay";
import "./chatView.css";
import io from "socket.io-client";

const ENDPOINT = "localhost:5000";
let socket = io(ENDPOINT);

export default function ChatView({ name }) {
  const [message, setMessage] = useState("");

  const handleChange = e => {
    setMessage(e.target.value);
  };

  function clearMessage() {
    setMessage("");
  }

  const handleSubmit = e => {
    e.preventDefault();
    const currentTime = new Date();
    const currentTimeStr =
      ("00" + currentTime.getMonth() + 1).slice(-2) +
      "/" +
      ("00" + currentTime.getDate()).slice(-2) +
      "/" +
      currentTime.getFullYear() +
      " " +
      ("00" + currentTime.getHours()).slice(-2) +
      ":" +
      ("00" + currentTime.getMinutes()).slice(-2) +
      ":" +
      ("00" + currentTime.getSeconds()).slice(-2);
    socket.emit("message", {
      name: name,
      message: message,
      time: currentTimeStr
    });
    clearMessage();
  };

  return (
    <div className="chatView">
      <MessageDisplay />
      <form onSubmit={handleSubmit} className="textEntry">
        <p className="userName">{name}</p>
        <input
          className="messageInput"
          type="text"
          onChange={handleChange}
          placeholder="..."
          value={message}
        />
        <button className="sendBtn" type="submit">
          send
        </button>
      </form>
    </div>
  );
}
