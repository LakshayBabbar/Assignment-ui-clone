import React from "react";
import Image from "next/image";
import playButton from "../../../public/play-ico-1.png";
import { useDispatch } from "react-redux";
import { modelState } from "@/store/modelSlice";

const ShowCard = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="rounded-xl w-[21rem] bg-white border border-black pb-10 mb-2 shadow-[5px_5px_0px_0px_#fde68a] cursor-pointer">
      <div>
        <Image
          src={data.img}
          alt="card"
          width={200}
          height={200}
          className="aspect-video rounded-t-xl w-full relative"
        />
        <Image
          src={playButton}
          alt="play button"
          className="absolute top-16 left-36 cursor-pointer"
          onClick={() => dispatch(modelState(data.link))}
        />
      </div>
      <div className="flex flex-col p-2 items-start gap-1">
        <span className="text-[12px] text-blue-500">{data.tags}</span>
        <p className="text-base">
          <span className="font-bold">{data.title}</span>
          {" | "}
          {data.titleLight}
        </p>
      </div>
    </div>
  );
};

export default ShowCard;
