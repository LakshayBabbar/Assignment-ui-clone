import React from "react";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PiSuitcase } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa";

const CourseCard = () => {
  return (
    <div className="bg-white border border-black p-4 flex flex-col gap-5 w-[90vw] sm:w-[24rem] xl:w-[fit-content] rounded-md hover:shadow-[5px_5px_0px_0px_#fbbf24] transition-all duration-200 my-2">
      <span className="p-1 bg-amber-300 rounded-md w-[fit-content] text-sm">
        UNDER GRADUATE
      </span>
      <Link href="#" className="text-xl font-serif font-bold w-96">
        UG Programme in Technology & Business Management
      </Link>
      <hr className="w-full border-black" />
      <div className="grid grid-cols-2 gap-2">
        <div className="flex gap-2 items-center">
          <div className="p-2 rounded-md bg-amber-400 size-8">
            <CiClock2 />
          </div>
          <div>
            <h5 className="text-[13px] font-[500]">4 Years</h5>
            <h6 className="text-[12px]">Incl. 1 year intership</h6>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="p-2 rounded-md bg-amber-400 size-8">
            <CiLocationOn />
          </div>
          <h5 className="text-[13px] font-[500]">Full Time</h5>
        </div>
        <div className="flex gap-2 items-center">
          <div className="p-2 rounded-md bg-amber-400 size-8">
            <PiSuitcase />
          </div>
          <h5 className="text-[13px] font-[500]">Full Time</h5>
        </div>
        <div className="flex gap-2 items-center">
          <div className="p-2 rounded-md bg-amber-400 size-8">
            <CiCalendar />
          </div>
          <div>
            <h5 className="text-[13px] font-[500]">4 Years</h5>
            <h6 className="text-[12px]">Incl. 1 year intership</h6>
          </div>
        </div>
      </div>
      <hr className="w-full border-black" />
      <ul className="space-y-4">
        <li className="text-sm flex">
          <FaCaretRight className="text-amber-400 text-xl" />
          <span>
            Industry “<strong>Co-Op</strong>” programme with 1 year internship
          </span>
        </li>
        <li className="text-sm flex">
          <FaCaretRight className="text-amber-400 text-xl" />
          <span>
            Industry “<strong>Co-Op</strong>” programme with 1 year internship
          </span>
        </li>
        <li className="text-sm flex">
          <FaCaretRight className="text-amber-400 text-xl" />
          <span>
            Industry “<strong>Co-Op</strong>” programme with 1 year internship
          </span>
        </li>
      </ul>
      <div className="w-full relative h-10 my-3">
        <button className="absolute right-0 text-md text-red-500">Apply Now</button>
      </div>
    </div>
  );
};
export default CourseCard;
