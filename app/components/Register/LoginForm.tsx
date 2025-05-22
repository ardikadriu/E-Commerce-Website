"use client";
import Image from "next/image";
import SideImage from "@/public/RegisterForm/Side Image.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "user@example.com" && password === "password") {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center my-20">
      <div>
        {" "}
        <Image src={SideImage} width={805} height={781} alt="side image" />
      </div>{" "}
      <div className="px-[128px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="font-bold text-3xl mb-6 w-full">
            Log in to Exclusive
          </h1>
          <p className="text-left w-full mb-7">Enter your details below</p>
          <div className="flex flex-col gap-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Phone Number"
              className="outline-none border-b border-gray-200 w-[371px]  pb-1"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="outline-none border-b border-gray-200 w-[371px] pb-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div className="my-10 w-full">
            {" "}
            <div className="flex justify-between ">
              <button
                type="submit"
                className=" text-white bg-orange-600 text-2xl py-3 rounded-sm  hover:cursor-pointer px-7"
              >
                Log In
              </button>
              <button
                className="items-center flex justify-center py-3  hover:cursor-pointer text-orange-600"
                disabled
              >
                Forget Password?
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
