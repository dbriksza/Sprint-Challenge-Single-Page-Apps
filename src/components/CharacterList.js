import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacter(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className="character-list">
      <h2>Characters!</h2>
      <>
        {character.map(characters => (
          <CharacterCard info={characters} />
        ))}
      </>
    </section>
  );
}
