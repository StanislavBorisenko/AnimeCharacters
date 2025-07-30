import { useContext, type Dispatch, type FC, type SetStateAction } from "react";
import { Form, Search } from "./styles";
import { ThemeContext } from "../../ThemeContext";

interface IProps {
	searchInput: string;
	setSearchInput: Dispatch<SetStateAction<string>>;
}

const FilterForm: FC<IProps> = ({ searchInput, setSearchInput }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
			}}
		>
			<Search
				type="search"
				value={searchInput}
				onChange={(event) => setSearchInput(event.target.value)}
				placeholder="Enter character's name"
				theme={theme}
			/>
		</Form>
	);
};

export default FilterForm;
