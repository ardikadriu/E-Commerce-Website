"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const targetTime =
    new Date().getTime() +
    3 * 24 * 60 * 60 * 1000 + // 3 days
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
    <div className="flex gap-20 text-center ">
      <div className="font-bold text-4xl ">
        <h1>Flash Sales</h1>
      </div>
      <div className="flex gap-5 items-center ">
        <div>
          <h2>Days</h2>
          <h1 className="font-bold text-3xl"> {timeLeft.days} :</h1>
        </div>
        <div>
          <h1>Hours</h1>
          <h1 className="font-bold text-3xl"> {timeLeft.hours} :</h1>
        </div>
        <div>
          <h1>Minutes</h1>
          <h1 className="font-bold text-3xl"> {timeLeft.minutes} :</h1>{" "}
        </div>
        <div>
          <h1>Seconds</h1>
          <h2 className="font-bold text-3xl">{timeLeft.seconds}</h2>
        </div>
      </div>
    </div>
  );
}
