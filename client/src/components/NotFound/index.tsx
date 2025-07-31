import { useContext, type FC } from "react";
import { NotFoundMessage } from "./styles";
import { ThemeContext } from "../../ThemeContext";

const NotFound: FC = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<NotFoundMessage theme={theme}>Совпадения не найдены</NotFoundMessage>
	);
};

export default NotFound;
