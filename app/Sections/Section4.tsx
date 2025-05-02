import React from "react";
import Title from "../components/Title";
import BestSellingMonth from "../components/BestSellingMonth";

const Section4 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%]">
        <Title title="This Month" />
        <BestSellingMonth />
      </div>
    </div>
  );
};

export default Section4;
