"use client";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Categories } from "../Data/Categories";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { Products, SecondProducts } from "../Data/Products";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Image from "next/image";
import Title from "./Title";
const OurProducts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full flex justify-between items-center">
        {" "}
        <Title title="Our Products" />{" "}
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
      </div>{" "}
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
        className="w-[100%] border-black "
        autoplay
      >
        {Products.map((Products, index) => (
          <SwiperSlide
            key={index}
            className="w-[270px] shrink-0 bg-gray-200  relative"
          >
            <div className=" absolute right-0 items-top px-4 py-5">
              <div className="flex flex-col gap-4">
                <h1>{Products.Favorite}</h1>
                <MdOutlineRemoveRedEye size={25} />
              </div>
            </div>
            <div className="w-full ">
              <div className=" my-5 flex justify-center h-[180px]">
                {" "}
                <Image src={Products.src} alt={Products.alt} />
              </div>
            </div>
            <div className=" w-full opacity-0 hover:opacity-100 transition-opacity ">
              <button className="w-full bg-black text-white py-2 font-semibold hover:cursor-pointer">
                Add To Cart
              </button>
            </div>
            <div className="bg-white">
              <h1 className="font-bold py-2">{Products.title}</h1>
              <h1>{Products.price}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>{" "}
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
        className="w-[100%] border-black "
        autoplay
      >
        {Products.map((Products, index) => (
          <SwiperSlide
            key={index}
            className="w-[270px] shrink-0 bg-gray-200  relative"
          >
            <div className=" absolute right-0 items-top px-4 py-5">
              <div className="flex flex-col gap-4">
                <h1>{Products.Favorite}</h1>
                <MdOutlineRemoveRedEye size={25} />
              </div>
            </div>
            <div className="w-full ">
              <div className=" my-5 flex justify-center h-[180px]">
                {" "}
                <Image src={Products.img} alt={Products.alt} />
              </div>
            </div>
            <div className=" w-full opacity-0 hover:opacity-100 transition-opacity ">
              <button className="w-full bg-black text-white py-2 font-semibold hover:cursor-pointer">
                Add To Cart
              </button>
            </div>
            <div className="bg-white">
              <h1 className="font-bold py-2">{SecondProducts.title}</h1>
              <h1>{SecondProducts.price}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>{" "}
    </div>
  );
};

export default OurProducts;
