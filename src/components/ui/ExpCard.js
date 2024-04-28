import React from "react";
import Image from "next/image";
import Button from "./Button";

const ExpCard = ({ data }) => {
  return (
    <div className="w-72 border border-black rounded-md h-[30rem]">
      <Image
        src={data.img}
        alt={data.title}
        width={400}
        height={200}
        className="aspect-video"
      />
      <div className="p-4 flex flex-col gap-4">
        <h1 className="text-xl font-serif font-bold">{data.title}</h1>
        <div className="w-full space-x-2">
          <span className="p-1 text-[11px] bg-amber-200 rounded-md">
            {data.time}
          </span>
          <span className="p-1 text-[11px] bg-amber-200 rounded-md">
            {data.type}
          </span>
        </div>
        <p className="text-[12px]">{data.desc}</p>
        <a href={data.link} target="_blank">
          <Button
            className="w-full border-red-500 text-red-500 hover:shadow-red-400"
            variant="outline"
          >
            Register Now
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ExpCard;
