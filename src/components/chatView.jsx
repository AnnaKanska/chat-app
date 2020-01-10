import React from "react";
import useSetName from "./setName";

export default function ChatView() {
  const { name } = useSetName;
  console.log("chatview name-", name);
  return <div>chat view</div>;
}
