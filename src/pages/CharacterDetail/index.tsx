import { useEffect, useState, type FC } from "react";
import type { ICharacter } from "../../types/character";
import { useParams } from "react-router-dom";
import { getOneCharacter } from "../../services/api";
import DetailedCard from "../../components/DetailedCard";
import Spinner from "../../components/Spinner";

const CharacterDetail: FC = () => {
	const characterID = useParams();

	const [character, setCharacter] = useState<ICharacter | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);

				const result = await getOneCharacter(characterID);
				setCharacter(result);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		})();
	}, [characterID]);

	if (loading) {
		return <Spinner />;
	}

	if (character) {
		return (
			<DetailedCard
				name={character.name}
				image={character.image}
				birthdate={character.birthdate}
				debut={character.debut}
				clan={character.clan}
			/>
		);
	} else {
		return <div>Данные о персонаже не найдены</div>;
	}
};

export default CharacterDetail;
