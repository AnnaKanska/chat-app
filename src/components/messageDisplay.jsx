import React, { useState, useEffect } from "react";
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
        <div key={x.time}>
          <p>{x.name}</p>
          <p>{x.time}</p>
          <p>{x.message}</p>
        </div>
      ))
    );

  return <div className="messageDisplay">{displayed}</div>;
}
