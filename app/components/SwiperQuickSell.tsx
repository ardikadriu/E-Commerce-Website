"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Items } from "../Data/Items";
import Image from "next/image";

import { MdOutlineRemoveRedEye } from "react-icons/md";

import { useRef } from "react";
import CountdownTimer from "./Countdown";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const SwiperQuickSell = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-around items-center mb-5">
        {" "}
        <CountdownTimer />
        <div className="gap-5 flex">
          <button
            ref={prevRef}
            className="px-5 py-5 bg-gray-200 rounded-full cursor-pointer"
          >
            <FaLessThan size={24} />
          </button>
          <button
            ref={nextRef}
            className="px-5 py-5 bg-gray-200 rounded-full cursor-pointer"
          >
            <FaGreaterThan size={24} />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        spaceBetween={40}
        slidesPerView={4}
        className="w-[80%] border-black "
        autoplay
      >
        {Items.map((Items, index) => (
          <SwiperSlide key={index} className="w-[270px] bg-gray-200  relative">
            <div className=" flex justify-between items-top px-4 py-5">
              <button className="bg-orange-500 text-white rounded-sm px-5 h-[26px]">
                {Items.discount}
              </button>
              <div className="flex flex-col gap-4">
                <h1>{Items.Favorite}</h1>
                <MdOutlineRemoveRedEye size={25} />
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-[190px] h-[180px]">
                {" "}
                <Image src={Items.src} alt={Items.alt} />
              </div>
            </div>
            <div className=" w-full opacity-0 hover:opacity-100 transition-opacity">
              <button className="w-full bg-black text-white py-2 font-semibold">
                Add To Cart
              </button>
            </div>
            <div className="bg-white text-black">
              <h1 className="font-bold">{Items.title}</h1>
              <h2>
                {Items.price}{" "}
                <span className="">
                  <del>{Items.discountprice}</del>
                </span>
              </h2>
              <h1>{Items.rate}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex items-center my-15 flex-col">
        <button className="bg-orange-500 text-white px-10 py-8 rounded-sm hover:cursor-pointer">
          View All Products
        </button>
        <div className="bg-gray-300 w-[80%] h-[2px] mt-20"></div>
      </div>
    </div>
  );
};

export default SwiperQuickSell;
