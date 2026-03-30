import React, { useState } from "react";

const PremiumDigitalTools = () => {
  const [btnSelect, setBtnSelect] = useState("products");
  return (
    <div className="mt-30">
      <div className="space-y-4">
        <h1 className="text-center font-extrabold text-[48px] text-[#001931]">
          Premium Digital Tools
        </h1>
        <p className="text-center font-normal text-[16px] text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="text-center ">
          <button
            onClick={() => setBtnSelect("products")}
            className={`btn   ${btnSelect === "products" ? "bg-[#4F39F6] text-white" : "bg-white"} rounded-[999px] font-bold text-[16px`}
          >
            Products
          </button>
          <button
            onClick={() => setBtnSelect("cart")}
            className={`btn ${btnSelect === "cart" ? "bg-[#4F39F6]" : "bg-white"} text-[#25065D] rounded-[999px] font-medium text-[16px] `}
          >
            Cart (2)
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumDigitalTools;
