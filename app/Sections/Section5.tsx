import React from "react";
import CountdownHours from "../components/CountdownHours";
import Image from "next/image";
import Box from "@/public/BOOMBOX 1.png";

const Section5 = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-[80%] bg-black  flex justify-around items-center">
        <div>
          <h2 className="text-green-400 font-bold mt-12 mb-4">Categories</h2>
          <h2 className="max-w-[403px] text-[48px] text-white leading-15">
            Enhance Your Music Experience
          </h2>
          <CountdownHours />
          <button className="bg-green-400 px-13 py-4 rounded-md text-white mb-8 hover:cursor-pointer">
            Buy Now
          </button>
        </div>
        <div className=" p-4 ">
          <Image
            className=" object-cover  "
            src={Box}
            width={600}
            height={420}
            alt="box"
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
