import Card from "../Card/Card";

const AllCard = ({
  allCard,
  selectedCards,
  setSelectedCards,
  count,
  setCount,
}) => {
  //console.log(cards);
  return (
    <div className="container mx-auto mt-10 mb-10 md:mb-30 ">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-7.5">
        {allCard.map((card, index) => (
          <Card
            key={index}
            card={card}
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            count={count}
            setCount={setCount}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default AllCard;
