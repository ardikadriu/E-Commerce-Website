import { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
const StarRate = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex justify-start items-center gap-2">
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <label key={currentRate} className="cursor-pointer">
            <input
              type="radio"
              name="rate"
              value={currentRate}
              className="hidden"
              onClick={() => setRating(currentRate)}
            />
            <span
              className={`text-2xl ${
                currentRate <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              <IoStarSharp />
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default StarRate;
