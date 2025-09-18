import { useState } from "react";
import s from "./SpaceMissionForm.module.css";

type Planet = "mars" | "venus" | "jupiter" | "saturn";
export default function SpaceMissionForm() {
  const [name, setName] = useState<string>("John Dowson");
  const [planet, setPlanet] = useState<Planet>("mars");
  const options = [
    { value: "mars", label: "Mars" },
    { value: "venus", label: "Venus" },
    { value: "jupiter", label: "Jupiter" },
    { value: "saturn", label: "Saturn" },
  ];

  // отдельная функция для обработки изменения имени
  //  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };

  return (
    <div className={s.container}>
      <h2>🚀 Space Mission Registration</h2>
      <img src="https://cdn.langeek.co/photo/50639/original/astronaut?type=jpeg" alt="astronaut" />

      {/* Поле для имени */}

      <div className={s.name}>
        <label>Astronaut Name:</label>

        {/* теперь используем отдельную функцию */}
        {/* <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        /> */}

        {/* контролируемый input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      {/* interface User{
      email: string;
      }
      
         interface UserAccount extends User{  
      name: string;
      } */}

      {/* Выпадающий список для выбора планеты */}

      <div className={s.planet}>
        <label>Select your destination planet:</label>
        <select
          value={planet}
          onChange={(event) => setPlanet(event.target.value as Planet)}
        >
          {/* <option value="mars">Mars</option>
          <option value="venus">Venus</option>
          <option value="jupiter">Jupiter</option>
          <option value="saturn">Saturn</option> */}

          {options.map((option) => (
            <option value={option.value} label={option.label}></option>
          ))}
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
