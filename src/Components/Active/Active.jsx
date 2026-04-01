import React from "react";

const Active = () => {
  return (
    <div className="bg-[#4F39F6] h-61.75 text-white">
      <div className="container mx-auto flex justify-around items-center md:mt-0 mt-30  md:ml-10 ml-10">
        <div className="my-15 -ml-30">
          <h1 className="font-extrabold text-[60px]">50K+</h1>
          <p className="font-medium text-[24px] mt-2 opacity-60">
            Active Users
          </p>
        </div>
        <div>
          <h1 className="font-extrabold text-[60px]">200+</h1>
          <p className="font-medium text-[24px] mt-2 opacity-60">
            Premium Tools
          </p>
        </div>
        <div className="-mr-10">
          <h1 className="font-extrabold text-[60px]">4.9</h1>
          <p className="font-medium text-[24px] mt-2 opacity-60">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Active;
