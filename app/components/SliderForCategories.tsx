"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Categories } from "../Data/Categories";
import { useRef } from "react";

const SliderForCategories = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>
      <div className="flex items-center justify-between mb-15">
        <h1 className="text-4xl font-bold">Browse By Category</h1>
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
        modules={[Navigation]}
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
        slidesPerView={5}
      >
        {Categories.map((Categories, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center hover:bg-orange-600 py-10 hover:text-white border rounded-sm  hover:curspo">
              <h1 className="mb-4">{Categories.Device}</h1>
              <h2>{Categories.category}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderForCategories;
