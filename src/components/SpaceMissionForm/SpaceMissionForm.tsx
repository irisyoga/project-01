import { useState } from "react";


export default function SpaceMissionForm() {
  const [name, setName] = useState("John Dowson");
  const [planet, setPlanet] = useState("Mars");

  return (
    <div >
      <h2>🚀 Space Mission Registration</h2>

      {/* Поле для имени */}

      <label >Astronaut Name:</label>

      {/* контролируемый инпут */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
     
      <div>
        <label>Select your destination planet:</label>
        <select
          value={planet}
          onChange={(event) => setPlanet(event.target.value)}
        >
          <option value="Mars">Mars</option>
          <option value="Venus">Venus</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturn">Saturn</option>
        </select>
      </div>
      <div>
        <p >
          Astronaut {name} is headed to {planet}!
        </p>
      </div>
    </div>
  );
}
