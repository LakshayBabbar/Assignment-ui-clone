import React from "react";
import Image from "next/image";

const Banner = (props) => {
  return (
    <section className="bg-amber-300 flex justify-around items-center">
      <div className="flex flex-col items-center justify-center w-11/12 md:w-[30rem] gap-5 py-5">
        <h1 className="font-serif text-2xl  md:w-[30rem] font-bold">
          {props.title}
        </h1>
        <div className="w-full">
          <a href={props.btnLink} target="_blank">
            <button className="p-4 border border-black bg-white text-md rounded-md">
              {props.btnTitle}
            </button>
          </a>
        </div>
      </div>
      <Image src={props.img} alt="banner" className="hidden md:block w-[45vw]" />
    </section>
  );
};

export default Banner;
