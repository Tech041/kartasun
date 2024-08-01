"use client";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section className="w-full py-10  " id="services">
      <div className="container">
        <h2 className="text-2xl font-bold uppercase text-accent-300">
          Our Services
        </h2>
        <p className="w-full md:w-[60%] mt-3 text-green-800">
          Welcome to our solar installation services! We specialize in providing
          top-notch solar energy solutions tailored to meet your unique needs.
          Our experienced team offers comprehensive services, including system
          design, installation, and maintenance, ensuring efficient and reliable
          energy production. Embrace the power of the sun and take a step
          towards a greener, more sustainable future with our cutting-edge solar
          technology. Trust us to deliver quality, affordability, and
          exceptional customer service.
        </p>
        <div className="flex mt-5 gap-5 overflow-auto ">
          <div className="min-w-full md:min-w-[0px] md:flex-1 h-[200px] relative">
            <Image
              fill
              src="/images/inverterGraphic3.jpg"
              alt="solar powered house"
              className="object-cover"
            />
          </div>
          <div className="min-w-full md:min-w-[0px] md:flex-1 h-[200px] relative">
            <Image
              fill
              src="/images/inverterGraphic6.jpg"
              alt="solar powered house"
              className="object-cover"
            />
          </div>
          <div className="min-w-full md:min-w-[0px] md:flex-1 h-[200px] relative">
            <Image
              fill
              src="/images/inverterGraphic4.jpg"
              alt="solar powered house"
              className="object-cover"
            />
          </div>
          <div className="min-w-full md:min-w-[0px] md:flex-1 h-[200px] relative">
            <Image
              fill
              src="/images/inverterGraphic7.jpg"
              alt="solar powered house"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
