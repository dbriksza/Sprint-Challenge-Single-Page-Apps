import React from "react";

const CharacterCard = props => {
  return (
    <div className="charcard">
      <h2>Name: {props.info.name}</h2>
      <h3>Status: {props.info.status}</h3>
    </div>
  );
};
export default CharacterCard;
