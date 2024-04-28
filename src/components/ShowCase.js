import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ShowCard from "./ui/ShowCard";

export default function ShowCase(props) {
  return (
    <section className="flex flex-col md:flex-row my-20 justify-center">
      <div className="flex flex-col gap-5 p-10">
        <div className="w-full">
          <span className="bg-amber-300 py-1 px-2 rounded-md text-sm">
            {props.category}
          </span>
        </div>
        <h1 className="text-3xl font-serif w-80">
          {props.title} <span className="font-bold">{props.titleBold}</span>
        </h1>
      </div>
      <div className="w-full md:w-[55vw] px-8">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          modules={[Pagination]}
        >
          {props.data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ShowCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
