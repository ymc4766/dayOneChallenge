import React from "react";
import { BsChatSquareDots } from "react-icons/bs";
import { AiFillHeart, AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
const HeaderTop = () => {
  return (
    <div className="py-5">
      <div className="flex items-center space-x-2">
        <AiFillHeart size={22} className="text-[var(--primary-dark)]" />
        <h1 className="text-xl font-bold  text-gray-700">#100</h1>
      </div>

      <div className="flex space-x-4 ">
 *********
        <div className="hidden md:flex items-center  px-6">
          <AiFillPhone className="text-pink-500" size={22} />
          <p>+252 6347 66631</p>
        </div>
        <button className="px-3 bg-[#0d3a38] text-white p-1 rounded-md hover:bg-zinc-300 hover:text-black transition ">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;
