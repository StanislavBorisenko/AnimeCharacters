import { useState, type FC } from "react";
import CharactersList from "../../components/CharactersList";
import FilterForm from "../../components/FilterForm";

const HomePage: FC = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <FilterForm searchInput={searchInput} setSearchInput={setSearchInput} />
      <CharactersList searchInput={searchInput} />
    </>
  );
};

export default HomePage;
