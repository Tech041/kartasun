import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import Icons from "../icons/Icons";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-white  pb-0" id="contact">
      <div className="container flex flex-col md:flex-row gap-5">
        <div className="flex-1 flex flex-col gap-5" id="about">
          <h3
            className="text-xl font-bold uppercase text-accent-300"
            id="about-us"
          >
            ABOUT Kartasun Energy Solutions.
          </h3>
          <p className=" text-justify  text-green-800">
            We are Kartasun Energy Solutions! We are dedicated to providing
            innovative and efficient solar panel installations tailored to meet
            your energy needs. Our commitment to sustainability and quality
            ensures you receive the best solar solutions, helping you save on
            energy costs while contributing to a greener planet. Trust Kartasun
            Energy Solutions to power your future with clean, renewable energy.
          </p>
          <div className="hidden md:flex">
            <Icons />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-xl font-bold uppercase text-accent-300">
            CONTACT US
          </h3>
          <div className="flex items-center gap-3 text-green-800">
            <FaLocationArrow size={20} />
            <p>13B Ezeokafor Street Phase 2 Peace Estate Ipaye, Iba.</p>
          </div>
          <div className="flex items-center gap-3 text-green-800">
            <FaPhone size={20} />
            <p>+2347039204597</p>
          </div>
          <div className="flex items-center gap-3 text-green-800">
            <MdEmail size={20} />
            <p>reymondchuks@gmail.com</p>
          </div>
          <div className="md:hidden">
            <Icons />
          </div>
        </div>
      </div>
      <div className="flex  flex-col justify-center items-center mt-5 bg-green-800 py-10">
        <h6 className="text-[14px] text-white">&copy; All rights reserved.</h6>
        <h6 className="text-[14px] text-white">Kartasun Energy Solutions.</h6>
      </div>
    </footer>
  );
};

export default Footer;
