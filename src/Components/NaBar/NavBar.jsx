import React, { useState } from "react";
import img1 from "../../assets/DigiTools.png";
import { CiShoppingCart } from "react-icons/ci";
import { Menu, X } from "lucide-react";
const NavBar = ({ selectedCards }) => {
  const [open, setOpen] = useState();
  return (
    <div>
      <div className="">
        <div className="max-auto flex justify-around  items-center navbar bg-base-100 shadow-sm ">
          <div>
            {" "}
            <span
              onClick={() => setOpen(!open)}
              className="flex justify-center items-center gap-5"
            >
              {open === true ? (
                <X className="md:hidden"></X>
              ) : (
                <Menu className="md:hidden"></Menu>
              )}
              <img src={img1} className="" alt="" />
              <ul
                className={`md:hidden absolute duration-1000 p-3
            ${open ? "top-16" : "-top-40"}
             bg-amber-200 -ml-30`}
              >
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
              </ul>
            </span>
          </div>
          <div className="">
            <ul className="md:flex  hidden menu gap-8 menu-horizontal px-1 font-semibold text-5 text-[#101727">
              <li>Products</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="flex justify-between items-center gap-4 font-semibold text-4">
            <a href=""></a>
            <div className="indicator ">
              <span className="badge badge-sm indicator-item text-black"></span>
              <CiShoppingCart className="w-8 h-10" />
              <span className=" badge-sm indicator-item  text-red-600 text-2xl">
                {" "}
                {selectedCards.length}
              </span>
            </div>
            <a>Login</a>
            <a className="btn rounded-[10000px] bg-[#4F39F6] text-white mr-9">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
