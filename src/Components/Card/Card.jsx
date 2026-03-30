import React from "react";
//import img from "../../assets/design-tool.png";
const Card = ({ card }) => {
  console.log(card);
  const { tagType, icon, name, period, price, description, features } = card;
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
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>High-resolution image generation</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Customizable style templates</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Batch processing capabilities</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>AI-driven image enhancements</span>
            </li>
            <li className="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="line-through">Seamless cloud integration</span>
            </li>
            <li className="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="line-through">
                Real-time collaboration tools
              </span>
            </li>
          </ul>
          <div className="">
            <button className="btn btn-primary font-bold text-[16px] h-13 w-full rounded-[100px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
