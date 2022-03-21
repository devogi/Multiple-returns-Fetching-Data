import React from "react";

function App() {}
const names = ["a", "b", "c", "dale"];

const newNames = names.map((name) => 
  <h1>{name}</h1>
);


console.log(newNames);
export default App;
