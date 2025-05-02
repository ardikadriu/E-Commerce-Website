import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center my-10 gap-5 font-bold text-orange-600">
      <button className="px-5 py-10 bg-orange-500 rounded-md"></button>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
