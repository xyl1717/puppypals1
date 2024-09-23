import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (id) => {
    setFeatPupId(id);
  };

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <div>
      <h1>Puppy List</h1>
      <ul>
        {puppies.map((puppy) => (
          <li key={puppy.id}>
            <button onClick={() => handleClick(puppy.id)}>{puppy.name}</button>
          </li>
        ))}
      </ul>
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
};

export default App;
