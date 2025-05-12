"use client";
import { useEffect, useState } from "react";

const CountdownHours = () => {
  const targetTime =
    new Date().getTime() +
    5 * 24 * 60 * 60 * 1000 + // 5 days
    23 * 60 * 60 * 1000 + // 23 hours
    19 * 60 * 1000 + // 19 minutes
    56 * 1000; // 56 seconds

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetTime - now;

    const timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };

    return difference > 0 ? timeLeft : null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <p>Countdown finished!</p>;
  return (
    <div className="flex gap-4 my-8">
      <div className="w-[62px] h-[62px] rounded-full bg-gray-300 flex flex-col items-center justify-center">
        <h1> {timeLeft.hours}</h1>
        <h2 className="text-[10px]">Hours</h2>
      </div>
      <div className="w-[62px] h-[62px] rounded-full bg-gray-300 flex flex-col items-center justify-center">
        {" "}
        <h1> {timeLeft.days}</h1>
        <h2 className="text-[10px]">Days</h2>
      </div>
      <div className="w-[62px] h-[62px] rounded-full bg-gray-300 flex flex-col items-center justify-center">
        {" "}
        <h1> {timeLeft.minutes}</h1>
        <h2 className="text-[10px]">Minutes</h2>
      </div>
      <div className="w-[62px] h-[62px] rounded-full bg-gray-300 flex flex-col items-center justify-center">
        {" "}
        <h1> {timeLeft.seconds}</h1>
        <h2 className="text-[10px]">Seconds</h2>
      </div>
    </div>
  );
};

export default CountdownHours;
