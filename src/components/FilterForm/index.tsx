import React, { useContext, type FC } from "react";
import { Search, SearchForm } from "./styles";
import { ThemeContext } from "../../ThemeContext";

interface IProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const FilterForm: FC<IProps> = ({ searchInput, setSearchInput }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <SearchForm
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
    </SearchForm>
  );
};

export default FilterForm;
