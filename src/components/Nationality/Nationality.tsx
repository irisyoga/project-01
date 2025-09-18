import { useEffect, useState } from "react";

export default function Nationality() {
  const BASE_URL = "https://api.nationalize.io/?name=";

  type Country = {
    country_id: string;
    probability: number;
  };

  const [countries, setCountry] = useState<Country[]>([]);
  const [name, setName] = useState("michael");  

  async function fetchNationality(name: string ) {
    const res = await fetch(BASE_URL + name);
    const obj = await res.json();
    console.log(obj);
    const country = obj;
    setCountry(country);
  }

  useEffect(() => {
    fetchNationality(name);
  }, [name]);
  return (
    <div>
      <h2>Nationality by name</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <ul>
        {countries.map((c) => (
          <li key={c.country_id}>
            {c.country_id} Probability: {c.probability}</li>
        ))}
      </ul>
    </div>
  );
}
{message ? (
        <p>{message}</p>
      ) : (
        <ul>
          {countries.map((c) => (
            <li key={c.country_id}>
              {c.country_id} Probability: {c.probability}
            </li>
          ))}
        </ul>
      )}

