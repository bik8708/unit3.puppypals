import React, { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  function handleClick() {
    // some logic here
  }

  return (
    <div className="App">
      <h1>Puppy Pals</h1>
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              console.log("puppy id: ", puppy.id); // Step 1: Log the puppy's ID to the console
              setFeatPupId(puppy.id); // Step 2: Update the state with the clicked puppy's ID
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}

      {/* Step 3: Conditionally render the featured puppy ID */}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
