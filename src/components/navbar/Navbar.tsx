"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { MdClass, MdSportsGymnastics } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../button/Button";
import Icons from "../icons/Icons";
import { motion } from "framer-motion";
const styles =
  "flex gap-3 justify-start py-3 items-center hover:text-green-800";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      id: 1,
      title: "Home",
      path: "#hero",
    },
    {
      id: 2,
      title: "About",
      path: "#about",
    },
    {
      id: 3,
      title: "Contact",
      path: "#contact",
    },
    {
      id: 3,
      title: "Services",
      path: "#services",
    },
  ];
  return (
    <header className="w-full h-[80px] flex items-center fixed  font-semibold text-white bg-green-800 z-50">
      <div className=" container flex justify-between items-center">
        <div>
          <Link href="/#hero">
            <Image
              height={15}
              width={60}
              src="/images/logo-image.jpg"
              alt="Logo"
            />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="block md:hidden cursor-pointer z-10"
        >
          {open ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
        </div>
        <nav
          className={`${
            open ? "right-0" : "right-[-100%]"
          } w-[70%] md:w-auto h-screen md:h-auto px-5 md:px-0 
          pt-20 md:pt-0 absolute md:static top-0 duration-500 ease-in text- bg-accent-300 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row gap-5">
            {links.map((link) => (
              <li
                onClick={() => setOpen(false)}
                key={link.id}
                className={` hidden md:block
                    relative before:content-[''] before:w-[80%] before:h-1 before:absolute  
                    before:bottom-[-4px] before:left-0 before:scale-0 before:duration-500 before:transition-all 
                     before:origin-left hover:before:scale-100 before:bg-accent-300

                    
                   `}
              >
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <ul className="for-mobile md:hidden">
            <li className={styles} onClick={() => setOpen(false)}>
              <AiFillHome size={30} color="white" />{" "}
              <Link href="/#hero">Home</Link>
            </li>
            <li className={styles} onClick={() => setOpen(false)}>
              <MdSportsGymnastics size={30} color="white" />
              <Link href="/#about">About</Link>
            </li>
            <li className={styles} onClick={() => setOpen(false)}>
              <MdSportsGymnastics size={30} color="white" />
              <Link href="/#contact">Contact</Link>
            </li>
            <li className={styles} onClick={() => setOpen(false)}>
              <MdClass size={30} color="white" />{" "}
              <Link href="/#services">Services</Link>
            </li>
          </ul>
          <div className="md:hidden mt-10">
            {" "}
            <Icons />
          </div>
        </nav>
        <div className="hidden md:flex items-center gap-5">
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
