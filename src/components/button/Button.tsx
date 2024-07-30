import React from "react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const Button = () => {
  return (
    <Link
      href="/#contact-us"
      className="font-semibold px-10 py-2 rounded-full cursor-pointer text-green-800 bg-white hover:bg-green-400 hover:text-white flex justify-center items-center gap-3"
    >
      <span>
        <BsWhatsapp size={20} />
      </span>
      <span>Our hot-line</span>
    </Link>
  );
};

export default Button;
