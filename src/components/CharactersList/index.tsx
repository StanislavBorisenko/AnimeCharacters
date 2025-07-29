import { useEffect, useState, type FC } from "react";
import { CharsList } from "./styles";
import type { ICharacter } from "../../types/character";
import { fetchChars } from "../../services/api";
import Spinner from "../Spinner";
import CharacterCard from "../CharacterCard";
import NotFound from "../NotFound";

interface IProps {
  searchInput: string;
}

const CharactersList: FC<IProps> = ({ searchInput }) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [charactersCopy, setCharactersCopy] = useState<ICharacter[]>([
    ...characters,
  ]);

  useEffect(() => {
    fetchChars(characters, setCharacters);
  }, []);

  useEffect(() => {
    if (!searchInput) {
      setCharactersCopy([...characters]);
    } else {
      setCharactersCopy(
        characters.filter((char) =>
          char.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    }
  }, [searchInput]);

  return (
    <CharsList>
      {characters.length ? (
        !searchInput.length ? (
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
        ) : charactersCopy.length ? (
          charactersCopy.map((character) => (
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
          <NotFound />
        )
      ) : (
        <Spinner />
      )}
    </CharsList>
  );
};

export default CharactersList;
