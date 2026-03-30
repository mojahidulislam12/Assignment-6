import React from "react";
import img1 from "../../assets/DigiTools.png";
import { CiShoppingCart } from "react-icons/ci";
const NavBar = () => {
  return (
    <div>
      <div className="flex justify-around items-center navbar bg-base-100 shadow-sm">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <ul className="menu gap-8 menu-horizontal px-1 font-semibold text-5 text-[#101727">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-4 font-semibold text-4">
          <a href=""></a>
          <div className="indicator">
            <CiShoppingCart className="w-5 h-8" />
            <span className=" badge-sm indicator-item"></span>
          </div>
          <a>Login</a>
          <a className="btn rounded-[10000px] bg-[#4F39F6] text-white">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
