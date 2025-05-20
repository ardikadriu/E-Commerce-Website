import Image from "next/image";
import SideImage from "@/public/RegisterForm/Side Image.png";
import { FcGoogle } from "react-icons/fc";

const Form = () => {
  return (
    <div className="flex items-center my-20">
      <div>
        {" "}
        <Image src={SideImage} width={805} height={781} alt="side image" />
      </div>{" "}
      <div className="px-[128px]">
        <form action="" className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl mb-6 w-full">Create an account</h1>
          <p className="text-left w-full mb-7">Enter your details below</p>
          <div className="flex flex-col gap-10">
            <input
              type="text"
              placeholder="Name"
              className="outline-none border-b border-gray-200 w-[371px] pb-1"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="outline-none border-b border-gray-200 w-[371px]  pb-1"
            />
            <input
              type="password"
              placeholder="Password"
              className="outline-none border-b border-gray-200 w-[371px] pb-1"
            />
          </div>
          <div className="my-10 flex flex-col gap-4">
            {" "}
            <button
              type="submit"
              className=" text-white bg-orange-600 text-2xl w-[371px] py-3 rounded-sm  hover:cursor-pointer"
            >
              Create Account
            </button>
            <button
              className="items-center flex justify-center py-3 border hover:cursor-pointer "
              disabled
            >
              <FcGoogle size={24} /> Sign up with Google
            </button>
            <p className="text-center">
              Already have account?{" "}
              <span
                className="pl-2 font-bold border-b hover:cursor-pointer
               "
              >
                Log in
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
