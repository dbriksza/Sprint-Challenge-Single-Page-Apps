import React from "react";
import Header from "./components/Header.js";
import CharList from "./CharList";
// import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/CharList" component={CharList} />
      <Link to="/CharList" component={CharList}>
        <h2>Characters!</h2>
      </Link>
    </main>
  );
}
