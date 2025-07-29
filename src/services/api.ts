import axios from "axios";
import type { ICharacter, IResponse } from "../types/character";

export const fetchChars = async (_characters: ICharacter[], setCharacters: React.Dispatch<React.SetStateAction<ICharacter[]>>) => {
      try {
        const response = await axios.get<IResponse>(
          "https://dattebayo-api.onrender.com/characters"
        );
        const charactersData: ICharacter[] = response.data.characters.map(
          (character) => ({
            id: character.id,
            name: character.name,
            image: character.images?.[0] ?? null,
            jutsu: character.jutsu || [],
            birthdate: character.personal.birthdate || "Неизвестно",
            debut: character.debut.anime,
            clan: Array.isArray(character?.personal.clan)
              ? character?.personal.clan[0]
              : character?.personal.clan || "Нет клана / Неизвестно",
          })
        );
        setCharacters(charactersData);
      } catch (error) {
        console.log(error);
      }
    };