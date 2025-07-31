import { useContext, type FC } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Ability, Container, Information, Title } from "./styles";

interface IProps {
	jutsu: string[];
}

const Abilities: FC<IProps> = ({ jutsu }) => {
	const { theme } = useContext(ThemeContext);
	const abilities = jutsu.slice(0, 5);

	return (
		<Container>
			<Title theme={theme}>Abilities</Title>
			<Information>
				{abilities.map((ability) => (
					<Ability key={ability}>{ability}</Ability>
				))}
			</Information>
		</Container>
	);
};

export default Abilities;
