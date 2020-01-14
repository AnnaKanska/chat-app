import React, { useState, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./chatView.css";
import io from "socket.io-client";

const ENDPOINT = "localhost:5000";
let socket = io(ENDPOINT);

export default function MessageDisplay() {
  const [received, setReceived] = useState([]);

  useEffect(() => {
    socket.on("message", receivedMessage => {
      setReceived(previous => [...previous, receivedMessage]);
    });
  }, []);

  const displayed =
    received.length === 0 ? (
      <p>no messages</p>
    ) : (
      received.map(x => (
        <div className="displayMsgContainer" key={x.time}>
          <p className="displayName">{x.name}</p>
          <p className="displayTime">{x.time}</p>
          <p className="displayMsg">{x.message}</p>
        </div>
      ))
    );

  return (
    <div className="messageDisplay">
      <ScrollToBottom className="scrollingDisplay">{displayed}</ScrollToBottom>
    </div>
  );
}
