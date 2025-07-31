import { useContext, type FC } from "react";
import { ThemeContext } from "../../ThemeContext";
import {
	Container,
	Description,
	Detailed,
	Image,
	Information,
	Name,
	Title,
} from "./styles";

interface IProps {
	name: string;
	image: string | null;
	birthdate: string;
	debut: string;
	clan: string;
}

const DetailedCard: FC<IProps> = ({ name, image, birthdate, debut, clan }) => {
	const { theme } = useContext(ThemeContext);
	const characterInformation: string[][] = [
		["Birthdate", birthdate],
		["Debut", debut],
		["Clan", clan],
	];

	return (
		<Detailed>
			<Image src={image ?? ""} alt={name} />
			<Name>{name}</Name>
			<Description>
				{characterInformation.map((information) => (
					<Container key={information.toString()}>
						<Title theme={theme}>{information[0]}</Title>
						<Information theme={theme}>
							{information[1]}
						</Information>
					</Container>
				))}
			</Description>
		</Detailed>
	);
};

export default DetailedCard;
