import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";

interface Character {
  id: string;
  name: string;
  images?: string[];
  jutsu?: string[];
}

interface SimplifiedCharacter {
  id: string;
  name: string;
  image: string | null;
  jutsu: string[];
}

interface ApiResponse {
  characters: Character[];
}

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<SimplifiedCharacter[]>([]);

  useEffect(() => {
    const fetchChars = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://dattebayo-api.onrender.com/characters"
        );
        const simplifiedCharacters: SimplifiedCharacter[] =
          response.data.characters.map((character) => ({
            id: character.id,
            name: character.name,
            image: character.images?.[0] ?? null,
            jutsu: character.jutsu || [],
          }));
        setCharacters(simplifiedCharacters);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChars();
  }, []);

  return (
    <ul>
      {characters.map((character) => (
        <CharacterCard key={character.id} name={character.name} image={character.image} jutsu={character.jutsu} />
      ))}
    </ul>
  );
};

export default Home;
