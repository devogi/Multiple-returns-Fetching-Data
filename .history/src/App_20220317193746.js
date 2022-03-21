import React from "react";

function App(props) {

const names = props.names;
const newNames = names.map((name) => 
  <h1>{name}</h1>
);
return <ul> {newNames} </ul>
}


export default App;
