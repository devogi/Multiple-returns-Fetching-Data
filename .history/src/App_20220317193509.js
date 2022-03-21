import React from "react";

function App() {


const newNames = names.map((name) => 
  <h1>{name}</h1>
);
return <ul> {newNames} </ul>
}


const names = ["a", "b", "c", "dale"];
console.log(newNames);
export default App;
