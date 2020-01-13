import React, { useState } from "react";

export default function ChatView({ name }) {
  const [textValue, setTextValue] = useState("");
  console.log(textValue);
  return (
    <div className="chatView">
      <div className="messageDisplay"></div>
      <form onSubmit={() => {}} className="textEntry">
        <p className="userName">{name}</p>
        <input
          className="messageInput"
          type="text"
          onChange={e => setTextValue(e.target.value)}
          value={textValue}
        />
        <button className="sendBtn" type="submit">
          send
        </button>
      </form>
    </div>
  );
}
