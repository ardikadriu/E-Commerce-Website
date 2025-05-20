import React from "react";
import { ThisMonthBest } from "../Data/ThisMonthBest";
import Image from "next/image";

const BestSellingMonth = () => {
  return (
    <div className="">
      <div className="w-full flex  justify-between items-center mb-16">
        <h1 className="text-4xl font-bold">Best Selling Products</h1>{" "}
        <button className="bg-orange-500 text-white py-4 px-10 rounded-md hover:cursor-pointer">
          View All
        </button>
      </div>

      <div className="flex justify-around">
        {ThisMonthBest.map((ThisMonthBest, index) => (
          <div key={index} className="">
            <div className="bg-gray-300 px-15 py-10 w-[270px] h-[250px] flex flex-col items-center justify-center">
              {" "}
              <Image src={ThisMonthBest.src} alt="hello" />
            </div>
            <h1 className="font-bold">{ThisMonthBest.name}</h1>
            <h2 className="text-red-500 my-1 ">
              {ThisMonthBest.price}
              <span>
                <del className="text-gray-400 ml-2">
                  {ThisMonthBest.discountprice}
                </del>
              </span>
            </h2>
            <h3>{ThisMonthBest.Rates}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingMonth;
