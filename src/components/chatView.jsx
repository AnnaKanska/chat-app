import React, { useState } from "react";

export default function ChatView({ name }) {
  const [messageSent, setMessageSent] = useState({
    name: name,
    message: "",
    time: ""
  });

  const handleChange = e => {
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
    setMessageSent({
      ...messageSent,
      message: e.target.value,
      time: currentTimeStr
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessageSent({ ...messageSent, message: "", time: "" });
    console.log(messageSent);
  };

  return (
    <div className="chatView">
      <div className="messageDisplay"></div>
      <form onSubmit={handleSubmit} className="textEntry">
        <p className="userName">{name}</p>
        <input
          className="messageInput"
          type="text"
          onChange={handleChange}
          value={messageSent.message}
        />
        <button className="sendBtn" type="submit">
          send
        </button>
      </form>
    </div>
  );
}
