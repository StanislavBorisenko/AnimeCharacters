import { useContext, type FC } from "react";
import {
	Card,
	Description,
	Image,
	Information,
	Name,
	type IProps,
} from "./styles";
import { ThemeContext } from "../../ThemeContext";
import Abilities from "../Abilities";
import PersonalInfo from "../PersonalInfo";

const Character: FC<IProps> = ({
	name,
	image,
	jutsu,
	birthdate,
	debut,
	clan,
}) => {
	const { theme } = useContext(ThemeContext);

	return (
		<Card>
			<Image src={image ?? ""} alt={name} />
			<Description>
				<Name theme={theme}>{name}</Name>
				<Information>
					<PersonalInfo
						birthdate={birthdate}
						debut={debut}
						clan={clan}
					/>
					<Abilities jutsu={jutsu} />
				</Information>
			</Description>
		</Card>
	);
};

export default Character;
