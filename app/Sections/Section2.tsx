"use client";
import { useEffect, useState } from "react";
import CountdownTimer from "../components/Countdown";
import SwiperQuickSell from "../components/SwiperQuickSell";
import Title from "../components/Title";

const Section2 = () => {
  return (
    <div className="py-0 flex flex-col items-center">
      <div className="w-[80%] ">
        {" "}
        <Title title="Today’s" />
      </div>

      <SwiperQuickSell />
    </div>
  );
};

export default Section2;
