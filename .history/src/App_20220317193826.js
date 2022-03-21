import React from "react";

function App(props) {
  const names = ["a", "b", "c", "dale"];
  const newNames = names.map((name) => <h1>{name}</h1>);
  return <li> {newNames} </li>;
}

export default App;
