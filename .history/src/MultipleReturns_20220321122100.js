import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";
const url = "https://api.github.com/QuincyLarson";
function MultipleReturns() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

useEffect(() => {
  fetch(url)
.then((resp)  => {
  if ( resp.status >=200 )
} )
  return () => {
    second
  }
}, [third])



  return <div>MultipleReturns</div>;
}

export default MultipleReturns;
