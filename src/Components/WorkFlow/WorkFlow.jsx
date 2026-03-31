import React from "react";

const WorkFlow = () => {
  return (
    <div className="bg-[#4F39F6]">
      <div className=" py-30">
        <div className="">
          <h1 className="text-center font-extrabold text-[40px] text-[#FFFFFF]">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-center font-normal text-[16px] text-[#FFFFFF] opacity-90">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br /> Start your free trial today.
          </p>
        </div>
        <div className="mt-10">
          <div className="text-center m-4 flex justify-center gap-4">
            <button className="btn bg-white font-semibold text-[16px] text-[#4F39F6] rounded-[100px] w-40.5 h-13">
              Explore Products
            </button>

            <button className="btn bg-none rounded-[100px] font-semibold text-[16px] text-[text-[#4F39F6]] w-40.5 h-13">
              View Pricing
            </button>
          </div>
          <p className="text-center font-normal text-[16px] text-[#FFFFFF] opacity-80">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
