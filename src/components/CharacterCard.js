import React from "react";

const CharacterCard = props => {
  return (
    <div className="charcard" id={props.info.name}>
      <h2>
        Name: <span>{props.info.name}</span>
      </h2>
      <h3>Status: {props.info.status}</h3>
    </div>
  );
};
export default CharacterCard;
