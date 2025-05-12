import Image from "next/image";
import Ps5 from "@/public/New Arriwals/Playstaion 5.png";
import Women from "@/public/New Arriwals/Women-posing.png";
import Perfume from "@/public/New Arriwals/Perfume.png";
import Speakers from "@/public/New Arriwals/Speakers.png";

const Grid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-4">
      <div className=" bg-black h-[600px] flex justify-start items-end p-6 text-white relative">
        <Image
          className="absolute left-auto bottom-0 "
          src={Ps5}
          width={0}
          height={0}
          alt="ps5"
        />
        <div className="z-10">
          <h1 className="text-2xl">PlayStation 5</h1>
          <p className="max-w-[242px] text-sm my-4">
            Black and White version of the PS5 coming out on sale.
          </p>
          <button className=" border-b-1 hover:cursor-pointer text-2xl">
            Shop Now
          </button>
        </div>
      </div>
      <div className="grid grid-rows-2 gap-7">
        <div className=" bg-black flex justify-start items-end p-6 text-white relative ">
          <Image
            className="absolute right-0 bottom-0 w-full h-[284px] object-fit"
            src={Women}
            width={0}
            height={284}
            alt="model"
          />
          <div className="z-10">
            <h1 className="text-2xl">Women’s Collections</h1>
            <p className="max-w-[255px] text-sm my-4">
              Featured woman collections that give you another vibe.
            </p>
            <button className=" border-b-1 hover:cursor-pointer text-2xl">
              Shop Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-7  ">
          {" "}
          <div
            className="bg-black flex justify-start text-white items-end p-6 relative 

"
          >
            {" "}
            <Image
              className="absolute left-10 h-[221px] w-[191px] object-contain  "
              src={Speakers}
              width={0}
              height={0}
              alt="speakers"
            />
            <div className="z-10">
              <h1 className="text-2xl">Speakers</h1>
              <p className="max-w-[242px] text-sm my-4">
                Amazon wireless speakers
              </p>
              <button className=" border-b-1 hover:cursor-pointer text-2xl">
                Shop Now
              </button>
            </div>
          </div>
          <div className="bg-black text-white p-6 flex flex-col justify-end  relative">
            {" "}
            <Image
              className="absolute left-10 h-[221px] w-[191px] object-contain  "
              src={Perfume}
              width={0}
              height={0}
              alt="speakers"
            />
            <div className="z-10">
              <h1 className="text-2xl mb-13">Perfume</h1>

              <button className=" border-b-1 hover:cursor-pointer text-2xl">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
