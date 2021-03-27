import React, { useEffect, useState } from "react";
import Posts from "./post";


export default function App() {


  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then(data=>{setState(data.message) 
          })
      .catch((err) => {
      });
  }, []);

  return (
    <div className="App">
	  <h1>hello world</h1>
    <Posts state={state} />
    </div>
  );
}
