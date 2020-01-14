import React, { useState, useEffect } from "react";
import MessageDisplay from "./messageDisplay";
import io from "socket.io-client";

export default function ChatView({ name }) {
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState({
    name: name,
    message: "",
    time: ""
  });

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    let socket = io(ENDPOINT);
    socket.emit("message", messageSent);
  }, [messageSent]);

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
    setMessageSent({ ...messageSent, message: message, time: currentTimeStr });
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
