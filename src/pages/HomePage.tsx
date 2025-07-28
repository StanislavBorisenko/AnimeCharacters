import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface Character {
  id: string;
  name: string;
  images?: string[];
  jutsu?: string[];
  birthdate: number;
  debut: string;
  clan: string
}

interface SimplifiedCharacter {
  id: string;
  name: string;
  image: string | null;
  jutsu: string[];
  birthdate: number;
  debut: string;
  clan: string;
}

interface ApiResponse {
  characters: Character[];
}

const CharactersList = styled.ul`
  padding: 25px;
  margin: 0 auto;
  max-width: 1000px;
`;

const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30vh;
`;

const LoadingText = styled.p`
  color: #207dd4;
`;

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
            birthdate: character.personal.birthdate || "Неизвестно",
            debut: character.debut.anime,
            clan: Array.isArray(character?.personal.clan) ? character?.personal.clan[0] : (character?.personal.clan || 'Нет клана / Неизвестно')
          }));
        setCharacters(simplifiedCharacters);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChars();
  }, []);

  return (
    <CharactersList>
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
        <LoadingIndicator>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
          <LoadingText>Loading...</LoadingText>
        </LoadingIndicator>
      )}
    </CharactersList>
  );
};

export default Home;
