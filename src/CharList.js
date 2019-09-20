import React from "react";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const CharList = () => {
  return (
    <div>
      <Link to="/">
        <Header />
      </Link>
      <SearchForm />
      <CharacterList />
    </div>
  );
};

export default CharList;
