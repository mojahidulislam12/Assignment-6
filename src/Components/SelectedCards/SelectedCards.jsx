import { ShoppingCart } from "lucide-react";
import SelectCard from "../SelectCard/SelectCard";
import { toast } from "react-toastify";

const SelectedCards = ({
  selectedCards,

  setSelectedCards,
  count,
  setCount,
}) => {
  //console.log(count);
  //console.log(selectedCards.selectedCards);
  const cards = selectedCards;

  const handleDeleteAll = () => {
    setSelectedCards([]);
    toast.success("Products are successful purchase");
    setCount(0);
  };
  return (
    <div>
      {selectedCards.length === 0 ? (
        <div className="container mx-auto rounded-md mt-10 mb-10  h-100 flex justify-center items-center flex-col gap-4 border-1 ">
          <h2 className="font-bold text-xl">
            <ShoppingCart />
          </h2>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="card container mx-auto mt-10 mb-10 bg-base-100 shadow-sm px-15 space-y-6">
          <div>
            <h1 className="font-bold text-[24px]">Your Cart</h1>
            {cards.map((card) => (
              <SelectCard
                card={card}
                count={count}
                setCount={setCount}
                selectedCards={selectedCards}
                setSelectedCards={setSelectedCards}
              ></SelectCard>
            ))}
            <div className="flex justify-between items-center">
              <p className="font-normal text-[16px]">Total: </p>
              <p className="font-bold text-[24px]">${count}</p>
            </div>
            <button
              onClick={handleDeleteAll}
              className="btn btn-primary w-full rounded-[100px] mb-10"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedCards;
