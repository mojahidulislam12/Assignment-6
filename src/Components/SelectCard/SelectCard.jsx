import React from "react";

const SelectCard = ({
  card,
  selectedCards,
  setSelectedCards,
  count,
  setCount,
}) => {
  // console.log(card);
  const { icon, name, price } = card;
  const handleDeletedCard = () => {
    const filtered = selectedCards.filter((cards) => cards.name != card.name);
    setSelectedCards(filtered);
    setCount(count - price);
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-6 p-10 rounded-2xl border bg-[#F2F2F2] opacity-100 mt-4 ">
        <div className="flex items-center gap-6">
          <img className="h-20 w-25 rounded-md" src={icon} alt="" />
          <div>
            <h2 className="flex justify-between items-center gap-2 font-semibold text-2xl">
              {name}
            </h2>
            <p>${price}</p>
          </div>
        </div>
        <button
          onClick={handleDeletedCard}
          className="text-[#FF3980] font-bold text-[16px]"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SelectCard;
