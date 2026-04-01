import React from "react";
import img1 from "../../assets/Group 5.png";
import img2 from "../../assets/Play.png";
import img3 from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="container mx-auto h-190">
      <div className="-mt-10  mb-10 md:mt-21.25 -flex-row-reverse md:flex justify-between ">
        <div className="w-full">
          <button className="btn bg-[#E1E7FF] text-[#9514FA] rounded-[1000px] font-medium text-4 mt-20 md:mt-24.25">
            <img src={img1} alt="" srcset="" />
            New: AI-Powered Tools Available
          </button>
          <p className="font-extrabold text-[40px] md:text-[72px] mt-4">
            Supercharge Your
          </p>
          <p className="font-extrabold text-[40px] md:text-[72px]">
            Digital Workflow
          </p>
          <p className="font-normal text-[18px] mt-4">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
          <div className="mt-8">
            <button className="btn bg-[#4F39F6] font-bold text-4 text-white rounded-[100px]">
              Explore Products
            </button>
            <button className="btn font-bold text-4 ml-4 rounded-[100px] text-[#9514FA] border-[#9514FA]">
              <img src={img2} />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="mt-6  md:mt-0 md:w-100% ">
          <img className="w-full h-100 md:w-250 md:h-180" src={img3} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
