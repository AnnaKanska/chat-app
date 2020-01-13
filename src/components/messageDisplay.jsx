import React, { useEffect } from "react";
import io from "socket.io-client";

export default function MessageDisplay() {
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    let socket = io(ENDPOINT);
    socket.on("message");
  }, [ENDPOINT]);
  return <div className="messageDisplay"></div>;
}
