"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className=" w-full h-[calc(100vh-60px)] mt-[60px]  pt-[90px] bg-hero bg-no-repeat bg-cover bg-right md:bg-top"
      id="hero"
    >
      <div className="container mt-[250px] md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left text-accent-300">
          Green Energy
          <br className="hidden md:block" /> At Kartasun
          <br className="hidden md:block" />
          Energy Solutions.
        </h1>

        <div className=" mt-20 md:mt-7 flex items-center justify-center md:justify-start ">
          <Link
            target="_blank"
            href="https://wa.me/message/MKGP2424DC24D1"
            className="px-10 py-2 rounded-full cursor-pointer text-white bg-green-800 hover:bg-accent-300 "
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
