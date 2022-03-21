import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";
const url = "https://api.github.com/QuincyLarson";
function MultipleReturns() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url).then((resp) => {
      if (resp.status >= 200 && resp.status <= 299) {
        return resp.json();
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    });
.then((user) => {
  const {login} = user
  setUser(login)
  setIsLoading(false)
} )
.catch((error) => console.log(error) )


   
  }, [third]);

  return <div>MultipleReturns</div>;
}

export default MultipleReturns;
