import React from "react";

function App() {

const names = props.numbers;
const newNames = names.map((name) => 
  <h1>{name}</h1>
);
return <ul> {newNames} </ul>
}

const names = ["a", "b", "c", "dale"];

export default App;
