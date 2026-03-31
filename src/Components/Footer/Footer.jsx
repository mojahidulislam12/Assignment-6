import React from "react";
import img from "../../assets/DigiTools (1).png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#101727] ">
      <footer className="text-white grid grid-cols-5 container mx-auto pt-30 pb-10">
        <div className="text-white ">
          <img className="mb-4" src={img} alt="" />
          <p className="font-normal text-[16px] opacity-80 mt-4">
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>
        <div className="">
          <h1 className="font-medium text-[20px] opacity-80 mb-4">Product</h1>
          <p className="opacity-80">
            Features <br /> Pricing <br />
            Templates <br /> Integrations
          </p>
        </div>
        <div className="">
          <h1 className="font-medium text-[20px] opacity-80 mb-4">Company</h1>
          <p className="opacity-80">
            About
            <br /> Blog
            <br /> Careers
            <br /> Press
          </p>
        </div>
        <div className="">
          <h1 className="font-medium text-[20px] opacity-80 mb-4">Resources</h1>
          <p className="opacity-80">
            Documentation
            <br /> Help
            <br /> Center <br /> Community <br /> Contact
          </p>
        </div>
        <div className="ml-50 ">
          <h1 className="font-medium text-[20px] opacity-80 mb-4">
            Social Links
          </h1>
          <div className="text-white flex justify-between mt-4">
            <FaInstagram className="w-8 h-10"></FaInstagram>
            <FaFacebook className="w-8 h-10"></FaFacebook>
            <FaXTwitter className="w-8 h-10"></FaXTwitter>
          </div>
        </div>
      </footer>
      <div className="border-t-2 text-white opacity-20 container mx-auto mb-7"></div>
      <div className="text-white flex justify-between items-center container mx-auto  pb-8">
        <p className="font-normal text-[16px] text-[#FAFAFA] opacity-50">
          © 2026 Digitools. All rights reserved.
        </p>

        <div className="flex font-normal text-[16px] text-[#FAFAFA] opacity-50">
          <p className="mr-8">Privacy Policy</p>
          <p className="mr-8">Terms of Service</p>
          <p className="">Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
