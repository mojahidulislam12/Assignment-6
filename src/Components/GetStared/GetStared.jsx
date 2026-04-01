import React from "react";
import img1 from "../../assets/user.png";
import img2 from "../../assets/package.png";
import img3 from "../../assets/rocket.png";
const GetStared = () => {
  return (
    <div className=" bg-[#F1F1F1] hidden">
      <div className="py-30 container mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-extrabold text-[48px]">Get Started in 3 Steps</h1>
          <p className="font-normal text-[16px]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-4">
          <div className="card w-120  h-80   bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <div className="flex justify-end">
                <div className="text-center   items-center">
                  <p className="w-10 h-10 rounded-[1000px] bg-[#4F39F6] pt-2 text-white">
                    01
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div>
                  <img className="mx-auto" src={img1} alt="" />
                  <h1 className="font-bold text-[24px]">Create Account</h1>
                  <p className="font-normal text-[16px]">
                    Sign up for free in seconds. No credit card
                    <br /> required to get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-120 h-80 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <div className="flex justify-end">
                <div className="text-center   items-center">
                  <p className="w-10 h-10 rounded-[1000px] bg-[#4F39F6] pt-2 text-white">
                    02
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div>
                  <img className="mx-auto" src={img2} alt="" />
                  <h1 className="font-bold text-[24px]">Choose Products</h1>
                  <p className="font-normal text-[16px]">
                    Browse our catalog and select the tools <br /> that fit your
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-120 h-80 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <div className="flex justify-end">
                <div className="text-center   items-center">
                  <p className="w-10 h-10 rounded-[1000px] bg-[#4F39F6] pt-2 text-white">
                    03
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div>
                  <img className="mx-auto" src={img3} alt="" />
                  <h1 className="font-bold text-[24px]">Start Creating</h1>
                  <p className="font-normal text-[16px]">
                    Download and start using your premium <br /> tools
                    immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStared;
