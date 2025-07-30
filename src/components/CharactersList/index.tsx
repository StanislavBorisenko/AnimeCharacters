import { useEffect, useState, type FC } from "react";
import { Characters } from "./styles";
import type { ICharacter } from "../../types/character";
import { getCharacters } from "../../services/api";
import Spinner from "../Spinner";
import NotFound from "../NotFound";
import { Link } from "react-router-dom";
import PaginationContainer from "../Pagination";
import Character from "../Character";

interface IProps {
	searchInput: string;
}

const CharactersList: FC<IProps> = ({ searchInput }) => {
	const [characters, setCharacters] = useState<ICharacter[]>([]);
	const [filteredCharacters, setFilteredCharacters] = useState<ICharacter[]>(
		[],
	);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	const charactersPerPage = 5;
	const lastCharacterIndex = currentPage * charactersPerPage;
	const firstCharacterIndex = lastCharacterIndex - charactersPerPage;

	const currentCharacters = filteredCharacters.slice(
		firstCharacterIndex,
		lastCharacterIndex,
	);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const result = await getCharacters();
				setCharacters(result || []);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	useEffect(() => {
		if (!searchInput) {
			setFilteredCharacters([...characters]);

			return;
		}

		setFilteredCharacters(
			characters.filter((char) =>
				char.name.toLowerCase().includes(searchInput.toLowerCase()),
			),
		);
	}, [searchInput, characters]);

	if (loading) {
		return <Spinner />;
	}

	if (!filteredCharacters.length) {
		return <NotFound />;
	}

	return (
		<Characters>
			{currentCharacters.map((character) => (
				<Link key={character.id} to={`/character/${character.id}`}>
					<Character
						name={character.name}
						image={character.image}
						jutsu={character.jutsu}
						birthdate={character.birthdate}
						debut={character.debut}
						clan={character.clan}
					/>
				</Link>
			))}
			<PaginationContainer
				characters={filteredCharacters}
				currentPage={currentPage}
				charactersPerPage={charactersPerPage}
				setCurrentPage={setCurrentPage}
			/>
		</Characters>
	);
};

export default CharactersList;
