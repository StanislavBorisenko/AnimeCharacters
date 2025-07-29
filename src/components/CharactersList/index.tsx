import { useEffect, useState, type FC } from "react";
import { CharsList } from "./styles";
import type { ICharacter } from "../../types/character";
import { fetchChars } from "../../services/api";
import Spinner from "../Spinner";
import CharacterCard from "../CharacterCard";

const CharactersList: FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    fetchChars(characters, setCharacters);
  }, []);

  return (
    <CharsList>
      {characters.length ? (
        characters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            jutsu={character.jutsu}
            birthdate={character.birthdate}
            debut={character.debut}
            clan={character.clan}
          />
        ))
      ) : (
        <Spinner />
      )}
    </CharsList>
  );
};

export default CharactersList;
