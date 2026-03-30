import React, { use } from "react";
import Card from "../Card/Card";

const AllCard = ({ allCards }) => {
  const cards = use(allCards);
  //console.log(cards);
  return (
    <div>
      <div>
        {cards.map((card) => (
          <Card card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllCard;
