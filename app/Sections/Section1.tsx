"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../lib/Image";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const Section1 = () => {
  return (
    <div
      className="flex  w-full items-center justify-between pb-20
     "
    >
      <div className=" w-[200px] ml-[120px] flex flex-col p-4 gap-2">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            style={{
              borderBottom: "1px dotted #888",
              paddingBottom: "6px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {cat}
            {(cat === "Woman's Fashion" || cat === "Men's Fashion") && (
              <span style={{ fontWeight: "bold" }}>›</span>
            )}
          </div>
        ))}
      </div>
      <div className="ml-20 w-[1px] h-[380px]  bg-gray-300"></div>
      <Swiper
        autoplay={true}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        className="w-[60%] h-[334px] border-b-red-500 bg-black  "
        modules={[Pagination, Navigation, Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className=" ">
            <div className="w-full flex justify-around items-center">
              <div className="text-white">
                <div className="flex items-center gap-4 py-3">
                  {" "}
                  <h1>{image.icona}</h1>{" "}
                  <h1 className="text-white">{image.name}</h1>
                </div>

                <h2 className="text-5xl max-w-[294px]">{image.description}</h2>
                <button
                  style={{
                    marginTop: "2rem",
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    cursor: "pointer",
                  }}
                >
                  Shop Now →
                </button>
              </div>
              <div className=" ">
                <Image
                  className=" overflow-hidden w-[496px] h-[328px object-cover]"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section1;
