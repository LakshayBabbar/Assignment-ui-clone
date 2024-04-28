import React, { useState } from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Button from "./ui/Button";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const listClass =
    "rounded-full bg-black text-white hover:bg-red-500 p-1 text-xl transition-all duration-500";
  return (
    <nav className="fixed top-0 left-0 bg-white w-full h-16 border-b z-[999]">
      <div className="w-full h-full flex items-center justify-around">
        <div>
          <Image src={logo} alt="logo" className="w-36 sm:w-auto" />
        </div>
        <div className="flex gap-4 items-center">
          <ul className="hidden sm:flex gap-4">
            <li className={listClass}>
              <a
                href="https://www.instagram.com/masters.union/"
                target="_blank"
                area-label="instagram account"
              >
                <FaInstagram />
              </a>
            </li>
            <li className={listClass}>
              <a
                href="https://www.youtube.com/mastersunion"
                target="_blank"
                area-label="youtube channel"
              >
                <FaYoutube />
              </a>
            </li>
            <li className={listClass}>
              <a
                href="https://discord.com/invite/NBCbS9cJHD"
                target="_blank"
                area-label="discord server"
              >
                <FaDiscord />
              </a>
            </li>
            <li className={listClass}>
              <a
                href="https://www.linkedin.com/school/mastersunion/"
                target="_blank"
                area-label="linkedin profile"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className={listClass}>
              <a
                href="https://twitter.com/themastersunion"
                target="_blank"
                area-label="twitter profile"
              >
                <FaXTwitter />
              </a>
            </li>
          </ul>
          <Button className="hidden sm:flex">All Courses</Button>
          <Button className="border-red-500 text-red-500 hover:shadow-none" variant="outline">Apply Now</Button>
          <div className="sm:hidden">
            <IoMenuOutline
              className={`text-2xl cursor-pointer ${!active && "hidden"}`}
              onClick={() => setActive(false)}
            />
            <IoMdClose
              className={`text-2xl cursor-pointer ${active && "hidden"}`}
              onClick={() => setActive(true)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
