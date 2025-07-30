import { Fragment, useContext, type FC } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Information, Personal, Title } from "./styles";

interface IProps {
	birthdate: string;
	debut: string;
	clan: string;
}

const PersonalInfo: FC<IProps> = ({ birthdate, debut, clan }) => {
	const { theme } = useContext(ThemeContext);
	const characterInformation: string[][] = [
		["Birthdate", birthdate],
		["Debut", debut],
		["Clan", clan],
	];

	return (
		<Personal>
			{characterInformation.map((information) => (
				<Fragment key={information.toString()}>
					<Title theme={theme}>{information[0]}</Title>
					<Information theme={theme}>{information[1]}</Information>
				</Fragment>
			))}
		</Personal>
	);
};

export default PersonalInfo;
