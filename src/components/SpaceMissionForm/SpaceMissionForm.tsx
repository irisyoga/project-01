import { useState } from "react";
import s from "./SpaceMissionForm.module.css";

export default function SpaceMissionForm() {
  const [name, setName] = useState("John Dowson");
  const [planet, setPlanet] = useState("Mars");

  return (
    <div className={s.container}>
      <h2>🚀 Space Mission Registration</h2>

      {/* Поле для имени */}

      <div className={s.name}>
        <label>Astronaut Name:</label>

        {/* контролируемый инпут */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className={s.planet}>
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

     
      <div className={s.missionInfo}>
        <p>
          Astronaut {name} is headed to {planet}!
        </p>
      </div>
    </div>
  );
}
