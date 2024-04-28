import React from "react";
import Image from "next/image";

const AboutCard = ({ data }) => {
  return (
    <div className="border border-black rounded w-[21rem] my-6 hover:shadow-[5px_5px_0px_0px] hover:shadow-amber-300 transition-all duration-300">
      <Image src={data.img} alt={data.name} width={800} height={800} />
      <div className="p-2 text-[13px] py-4">
        <h1 className="font-bold font-serif">{data.name}</h1>
        <h2>{data.profession}</h2>
        <br className="text-base" />
        <h2>Teaching: </h2>
        <p className="text-[11px]">{data.teaching}</p>
      </div>
    </div>
  );
};

export default AboutCard;
