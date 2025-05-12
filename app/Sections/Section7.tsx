import React from "react";
import Title from "../components/Title";
import Grid from "../components/Grid";
import Ads from "../components/Ads";

const Section7 = () => {
  return (
    <div className=" flex flex-col items-center ">
      <div className="w-[80%]">
        <Title title="Featured" />

        <h1 className="font-bold text-4xl mb-14">New Arrival</h1>

        <Grid />
        <Ads />
      </div>
    </div>
  );
};

export default Section7;
