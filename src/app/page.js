"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import video from "../../public/heroVideo.gif";
import Image from "next/image";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { BsSuitcaseLg } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import CourseCard from "@/components/ui/CourseCard";
import Banner from "@/components/ui/Banner";
import ShowCase from "@/components/ShowCase";
import offcampus from "../lib/data/offCampus.json";
import podcast from "../lib/data/podcast.json";
import podcast2 from "../lib/data/podcast2.json";
import experience from "../lib/data/experience.json";
import banner1 from "../../public/banner.png";
import banner2 from "../../public/banner2.gif";
import teachers from "../lib/data/teachers.json";
import AboutCard from "@/components/ui/AboutCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ContainerSection from "@/components/ui/ContainerSection";
import news from "../lib/data/news.json";
import NewsCard from "@/components/ui/NewsCard";
import ExpCard from "@/components/ui/ExpCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-[#fff1d2] w-full py-20 flex flex-col md:flex-row items-center justify-evenly mt-16 gap-10">
        <div className="w-4/5 sm:w-[30rem] space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold font-serif">
            Learn Business by <i className="relative z-10">Running</i> Business
          </h1>
          <ul className="space-y-4">
            <li className="flex gap-2">
              <CiGlobe className="text-2xl" />
              Curriculum that takes learning beyond the classroom
            </li>
            <li className="flex gap-2">
              <BsSuitcaseLg className="text-xl" />
              Classes led by 200+ MDs, CEOs & Founders
            </li>
            <li className="flex gap-2">
              <MdOutlineCurrencyRupee className="text-2xl" />
              Placements driven courses with avg. CTC of ₹ 34.07L
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button className="w-full sm:w-auto" size="xl">
              Explore Courses
            </Button>
            <Button size="xl" className="w-full sm:w-auto" variant="outline">
              What&apos;s Cooking?
            </Button>
          </div>
        </div>
        <div className="relative w-4/5 sm:w-[35vw]">
          <Image
            src={video}
            alt="hello"
            className="rounded-md relative z-10 sm:hidden md:flex shadow-[5px_5px_0px_0px_#fbbf24]"
            unoptimized
          />
        </div>
      </section>
      <section className="py-20 flex flex-col items-center">
        <div className="w-11/12 md:w-[fit-content]">
          <div className="sm:sticky top-26 bg-white pt-5 z-40">
            <h1 className="text-2xl xm:text-3xl font-serif font-thin mb-10">
              Elevate. Execute. Evolve.
              <br />
              <span className="font-bold">
                Hands-on & Placement Driven Programmes
              </span>
            </h1>
          </div>

          <div className="grid grid-flow-col md:grid-flow-row xl:grid-cols-3 md:grid-cols-2 justify-items-center gap-6 overflow-x-scroll md:overflow-x-hidden">
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </section>
      <Banner
        title="Undergraduate Students Make Over 1 Crore In Dropshipping"
        img={banner1}
        btnTitle="Download Now"
        btnLink="https://cdn.mastersunion.link/file/mastersunion/assets/imgV2/UG-REPORTFeb.pdf"
      />
      <ShowCase
        data={offcampus}
        title="Our Students Learn Business Outside The Classroom With"
        titleBold="Off Campus"
        category="OFFCAMPUS"
      />
      <Banner
        title="World's First AI Tutor Disrupting Traditional Education"
        img={banner2}
        btnTitle="Watch Videio"
        btnLink="https://www.youtube.com/watch?v=Wg7KcQ4ILcg&feature=youtu.be"
      />
      <ContainerSection
        title="Learn from the Masters, Hands-On"
        desc="Take a closer look into our classrooms"
        btnLink="https://mastersunion.org/meetmasters"
        btnTitle="Meet the Master"
      >
        <Swiper slidesPerView={"auto"} spaceBetween={30} modules={[Pagination]}>
          {teachers.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <AboutCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ContainerSection>
      <Banner
        title="Masters' Union in collaboration with Microsoft & InterviewClub is hosting a 48-hour Hackathon on 20th and 21st April"
        img={banner1}
        btnTitle="Click on this Button"
        btnLink="https://www.interviewclub.co/microsoft-hackathon-by-interviewclub"
      />
      <ShowCase
        data={podcast}
        title="Watch the Latest Episodes of our"
        titleBold="Podcast - Series C"
        category="PODCAST"
      />
      <ContainerSection title="In the News">
        <Swiper slidesPerView={"auto"} spaceBetween={30} modules={[Pagination]}>
          {news.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <NewsCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ContainerSection>
      <ShowCase
        data={podcast2}
        title="The Masters Union Experience."
        titleBold="First Hand."
        category="PODCAST"
      />
      <ContainerSection title="Experience the Union">
        <Swiper slidesPerView={"auto"} spaceBetween={30} modules={[Pagination]}>
          {experience.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ExpCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ContainerSection>
      <Footer />
    </>
  );
}
