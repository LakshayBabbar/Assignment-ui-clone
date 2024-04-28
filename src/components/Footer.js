import React from "react";
import logo from "../../public/logoWhite.svg";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const listClass =
    "rounded-full bg-white text-black hover:bg-amber-300 p-1 transition-all duration-500";
  return (
    <footer className="bg-black text-white md:px-[10vw] px-4">
      <div className="flex flex-col md:flex-row justify-between py-16 gap-10">
        <div className="space-y-5 text-sm">
          <Image src={logo} alt="logo" />
          <p>
            DLF Cyberpark, Phase II, Udyog Vihar, Sector 20, Gurugram, Haryana,
            122008
          </p>
          <p className="mt-2">
            📧{" "}
            <a href="mailto:info@mastersunion.org" target="_blank">
              info@mastersunion.org
            </a>
          </p>
        </div>
        <div className="flex gap-10 text-sm">
          <ul className="grid grid-cols-2 md:grid-cols-3 items-center gap-5">
            <li>
              <a
                href="https://mastersunion.org/pgp-tbm-careers"
                target="_blank"
                className="hover:text-amber-300"
              >
                On Campus Programs
              </a>
            </li>
            <li>
              <a
                href="https://mastersunion.org/pgp-tbm-careers"
                target="_blank"
                className="hover:text-amber-300"
              >
                PGP TBM Careers
              </a>
            </li>
            <li>
              <a
                href="https://mastersunion.org/leadership"
                target="_blank"
                className="hover:text-amber-300"
              >
                Leadership Team
              </a>
            </li>
            <li>
              <a
                href="https://mastersunion.org/for-companies "
                target="_blank"
                className="hover:text-amber-300"
              >
                For Companies
              </a>
            </li>
            <li>
              <a
                href="https://mastersunion.org/become-a-master"
                target="_blank"
                className="hover:text-amber-300"
              >
                Become a Master
              </a>
            </li>
            <li>
              <a
                href="https://mastersunion.org/events"
                target="_blank"
                className="hover:text-amber-300"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="https://mastersunion.org/jobs"
                target="_blank"
                className="hover:text-amber-300"
              >
                Work with U
              </a>
              s
            </li>
            <li>
              <a
                href="https://mastersunion.org/campus-in-vr"
                target="_blank"
                className="hover:text-amber-300"
              >
                Campus Virtual Tour
              </a>
            </li>
            <li>
              <a
                href="https://mastersunion.org/contact-us"
                target="_blank"
                className="hover:text-amber-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-zinc-700" />
      <div className="py-5 flex flex-col md:flex-row justify-between gap-2 md:gap-0 md:items-center">
        <p>Copyright © 2024 Masters&apos; Union</p>
        <div className="text-sm">
          <a href="#" className="text-white">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="text-white mx-2">
            Terms and Conditions
          </a>{" "}
          |
          <a href="#" className="text-white mx-2">
            Cookie Policy
          </a>
        </div>
        <ul className="flex gap-4">
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
      </div>
    </footer>
  );
};

export default Footer;
