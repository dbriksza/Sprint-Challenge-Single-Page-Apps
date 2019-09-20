import React from "react";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";

const CharList = () => {
  return (
    <div>
      <SearchForm />
      <CharacterList />
    </div>
  );
};

export default CharList;
