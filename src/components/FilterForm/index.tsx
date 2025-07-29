import React, { type FC } from "react";
import { Search, SearchForm } from "./styles";

interface IProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const FilterForm: FC<IProps> = ({ searchInput, setSearchInput }) => {
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
      />
    </SearchForm>
  );
};

export default FilterForm;
