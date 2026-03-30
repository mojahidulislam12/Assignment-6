import React, { use } from "react";
import Card from "../Card/Card";

const AllCard = ({ allCards }) => {
  const cards = use(allCards);
  //console.log(cards);
  return (
    <div className="container mx-auto mt-10 ">
      <div className="grid grid-cols-3 gap-7.5">
        {cards.map((card, index) => (
          <Card key={index} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllCard;
