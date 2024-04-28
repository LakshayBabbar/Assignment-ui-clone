import React from "react";
import Image from "next/image";

const NewsCard = ({ data }) => {
  return (
    <div className="w-72 rounded border border-black shadow-[5px_5px_0px_0px] shadow-amber-200 hover:shadow-amber-300 transition-all duration-300 m-1">
      <Image src={data.img} alt="img" width={300} height={300} className="border-b border-black" />
      <div className="p-2">
        <p className="text-[11px] line-clamp-2">{data.desc}</p>
      </div>
    </div>
  );
};

export default NewsCard;
