import { FaTruckFast } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Ads = () => {
  return (
    <div className=" flex justify-around mt-20">
      <div className="flex flex-col  items-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center">
          <div className="w-14 h-14 bg-black rounded-full flex justify-center items-center">
            <FaTruckFast color="white" size={40} />
          </div>
        </div>
        <div className="text-center mt-4">
          {" "}
          <h1 className="font-bold text-[28px]">FREE AND FAST DELIVERY</h1>
          <p className="text-[21px]">Free delivery for all orders over $140</p>
        </div>
      </div>
      <div className="flex flex-col  items-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center">
          <div className="w-14 h-14 bg-black rounded-full flex justify-center items-center">
            <TfiHeadphoneAlt color="white" size={40} />
          </div>
        </div>{" "}
        <div className="text-center mt-4">
          <h1 className="font-bold text-[28px]">24/7 CUSTOMER SERVICE</h1>
          <p className="text-[21px]">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className="flex flex-col  items-center">
        {" "}
        <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center">
          <div className="w-14 h-14 bg-black rounded-full flex justify-center items-center">
            <IoShieldCheckmarkOutline color="white" size={40} />
          </div>
        </div>
        <div className="text-center mt-4">
          <h1 className="font-bold text-[28px]">MONEY BACK GUARANTEE</h1>
          <p className="text-[21px]">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Ads;
