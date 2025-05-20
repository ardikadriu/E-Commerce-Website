"use client";
import { useState } from "react";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex justify-around py-5 items-center border-b border-gray-300">
      <h1 className="font-bold text-2xl">Exclusive</h1>
      <ul className="flex gap-10 hover:cursor-pointer">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Sign Up</li>
      </ul>
      <div className="flex items-center gap-2">
        <div className="bg-gray-200 flex items-center px-2 rounded-sm">
          {" "}
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2   rounded-lg outline-none border-none"
          />
          <CiSearch type="submit" className="hover:cursor-pointer" size={25} />
        </div>

        <CiHeart
          className=" hover:cursor-pointer"
          size={25}
          color={liked ? "red" : ""}
          onClick={() => setLiked(!liked)}
        />
        <CiShoppingCart size={25} className=" hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
