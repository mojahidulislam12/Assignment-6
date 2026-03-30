import React from "react";
import SelectCard from "../SelectCard/SelectCard";

const SelectedCards = ({ selectedCards, count }) => {
  //console.log(count);
  //console.log(selectedCards.selectedCards);
  const cards = selectedCards;
  return (
    <div>
      {selectedCards.length === 0 ? (
        <div className="h-100 flex justify-center items-center flex-col gap-4">
          <h2 className="font-bold text-xl">No players selected yet</h2>
          <p>Go to Available tab to select players</p>
        </div>
      ) : (
        <div className="card container mx-auto mt-10 mb-10 bg-base-100 shadow-sm px-15 space-y-6">
          <div>
            <h1 className="font-bold text-[24px]">Your Cart</h1>
            {cards.map((card) => (
              <SelectCard card={card}></SelectCard>
            ))}
            <div className="flex justify-between items-center">
              <p className="font-normal text-[16px]">Total: </p>
              <p className="font-bold text-[24px]">${count}</p>
            </div>
            <button className="btn btn-primary w-full rounded-[100px] mb-10">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedCards;
