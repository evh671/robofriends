import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ robots, searchField }) => {
  return (
    <div className="card-list">
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  );
};

export default CardList;
