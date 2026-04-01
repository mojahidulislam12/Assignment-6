import React, { useState } from "react";
import CardFeatured from "../CardFeatured/CardFeatured";
//import img from "../../assets/design-tool.png";
import { IoIosCheckmark } from "react-icons/io";
import { toast } from "react-toastify";
const Card = ({ card, selectedCards, setSelectedCards, count, setCount }) => {
  //console.log(card);
  const { tagType, icon, name, period, price, description, features } = card;
  const [isSelected, setIsSelected] = useState(false);
  const handleSelectCard = (card) => {
    setSelectedCards([...selectedCards, card]);
    toast.success("Card is Successfully Added");
    setCount(count + price);
    setIsSelected(true);
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body space-y-4">
          <div className="flex justify-end items-end">
            <span className="btn rounded-[1000px] bg-[#FEF3C6] text-[#BB4D00] font-medium text-[14px] uppercase">
              {tagType}
            </span>
          </div>
          <div className=" ">
            <button className="btn bg-white border-black-100 rounded-[1000px] w-25 h-25">
              <img className="w-15 h-15" src={icon} alt="" />
            </button>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-[24px]">{name}</h2>
            <p className="font-normal text-[14px] text-[#627382]">
              {description}
            </p>
            <span className="font-bold text-[24px] text-[#101727]">
              ${price}/{period}
            </span>
          </div>
          <ul className=" flex flex-col gap-2 text-xs font-medium text-[16px] text-[#627382]">
            {features.map((feature, index) => (
              <CardFeatured key={index} feature={feature}></CardFeatured>
            ))}
          </ul>
          <div className="">
            <button
              onClick={() => handleSelectCard(card)}
              className={`btn  ${isSelected === true ? "bg-[#5EBB2B] text-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"} font-bold text-[16px] h-13 w-full rounded-[100px]`}
              disabled={isSelected}
            >
              {isSelected === true ? "Add to cart" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
