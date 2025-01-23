import React, { useState } from "react";
import { puppyList } from "./data.js";

function App() {
  console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList);

  return (
    <>
      <h1>Puppy Pals</h1>{" "}
      {puppies.map((puppy) => (
        <p>{puppy.name}</p>
      ))}
    </>
  );
}

export default App;
