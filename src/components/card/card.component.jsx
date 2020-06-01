import React from "react";
import "./card.styles.css";

const Card = ({ id, name, email }) => {
  return (
    <div className="card-container tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?set=set1&size=200x200`}
        alt="robot"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
