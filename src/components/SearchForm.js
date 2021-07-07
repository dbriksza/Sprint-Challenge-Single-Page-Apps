import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

function SearchForm() {
  let chars = document.getElementsByClassName("charcard");
  let characters = Array.from(chars);
  // searchTerm will save the data from the search input on every occurance of the change event.
  const [searchTerm, setSearchTerm] = useState("");
  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = characters.filter(character =>
      character.id.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = event => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <CharacterCard info={character} />
          ))}
        </ul>
      </div>
    </div>
  );
}

// const SearchForm = props => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const [searchResults, setSearchResults] = useState([]);
//   useEffect(() => {
//     const results = characters.filter(character =>
//       character.toLowerCase().includes(searchTerm)
//     );
//     setSearchResults(results);
//   }, [searchTerm]);
//   const handleChange = event => {
//     setSearchTerm(event.target.value);
//   };
//   useEffect(() => {
//     axios
//       .get(`https://rickandmortyapi.com/api/character/${searchTerm}`)
//       .then(response => {
//         setMovie(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <form>
//       <label for="name">Search:</label>
//       <input
//         id="name"
//         type="text"
//         name="textfield"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//     </form>
//   );
// };

export default SearchForm;
