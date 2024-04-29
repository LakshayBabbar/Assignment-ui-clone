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
  const [isdropdown, setIsDropdown] = useState(false);
  const listClass =
    "rounded-full bg-black text-white hover:bg-red-500 p-1 text-xl transition-all duration-500";
  return (
    <nav className="fixed top-0 left-0 bg-white w-full border-b z-50">
      <div className="w-full h-11 bg-black flex items-center justify-center">
        <div className="text-zinc-300 text-[13px] flex">
          <span className="hidden md:block">
            Online Practitioner-Led Learning with Offline Community Experiences
            |&nbsp;
          </span>
          <a
            href="https://mastercamp.org/"
            target="_blank"
            className="bg-text bg-clip-text text-transparent font-bold"
          >
            &nbsp;EXPLORE MASTERCAMP
          </a>
        </div>
      </div>
      <div className="w-full flex items-center h-16 justify-around">
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
          <div className="relative">
            <Button
              className="border-red-500 text-red-500 hover:shadow-none"
              variant="outline"
              onClick={() => setIsDropdown(!isdropdown)}
            >
              Apply Now
            </Button>
            {isdropdown && (
              <div className="absolute bg-white h-22 w-36 top-14 rounded-md z-10">
                <ul className="p-2 text-sm flex flex-col justify-between h-full">
                  <li className="rounded-md p-2 hover:bg-zinc-200">
                    <a
                      href="https://admissions.mastersunion.org/pgp-rise"
                      target="_blank"
                    >
                      PGP Rise
                    </a>
                  </li>
                  <li className="rounded-md p-2 hover:bg-zinc-200">
                    <a
                      href="https://admissions.mastersunion.org/ug-admissions-form"
                      target="_blank"
                    >
                      UG Programme
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <Button className="hidden sm:flex">All Courses</Button>
          </div>
          <div className="sm:hidden">
            <IoMenuOutline
              className={`text-2xl cursor-pointer ${active && "hidden"}`}
              onClick={() => setActive(true)}
            />
            <IoMdClose
              className={`text-2xl cursor-pointer ${!active && "hidden"}`}
              onClick={() => setActive(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
