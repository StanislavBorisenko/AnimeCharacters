import axios from "axios";
import type { ICharacter, IResponse } from "../types/character";
import type { Params } from "react-router-dom";
import { URL } from "../constants";

export const getCharacters = async () => {
	try {
		const response = await axios.get<IResponse>(URL);
		const data = response.data;

		const characters: ICharacter[] = data.characters.map((character) => ({
			id: character.id,
			name: character.name,
			image: character.images?.[0] ?? null,
			jutsu: character.jutsu || [],
			birthdate: character.personal.birthdate || "Неизвестно",
			debut: character?.debut?.anime,
			clan: Array.isArray(character?.personal.clan)
				? character?.personal.clan[0]
				: character?.personal.clan || "Нет клана / Неизвестно",
		}));

		return characters;
	} catch (error) {
		console.error(error);
	}
};

export const getOneCharacter = async (params: Readonly<Params<string>>) => {
	try {
		const response = await axios.get(`${URL}/${params.id}`);
		const data = response.data;
		const clan = Array.isArray(data.personal?.clan)
			? data.personal?.clan[0]
			: data.personal?.clan || "Нет клана / Неизвестно";

		const character: ICharacter = {
			id: data.id,
			name: data.name,
			image: data.images?.[0] ?? null,
			jutsu: data.jutsu || [],
			birthdate: data.personal.birthdate || "Неизвестно",
			debut: data.debut?.anime,
			clan: clan,
		};

		return character;
	} catch (error) {
		console.error(error);
		return null;
	}
};
