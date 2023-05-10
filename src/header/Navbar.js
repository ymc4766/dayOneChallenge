import React, { useState } from "react";
import {
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
  FaFacebook,
  FaTimes,
  FaGithub,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div
      className="w-full min-h-[50px]  flex  justify-between items-center text-white
     bg-slate-500/80 absulate  z-10"
    >
      {/* <div> */}
      <ul className="hidden sm:flex px-5">
        <li>Home</li>
        <li>About</li>
        <li>History</li>
        <li>projects</li>
        <li>Contact</li>
      </ul>

      <div className="flex  justify-between text-pink-800">
        <FaFacebook className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGithub className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>

      <div onClick={handleNav} className="sm:hidden z-10">
        {!nav ? (
          <FaBars className="mr-4 cursor-pointer" />
        ) : (
          <FaTimes className="mr-4 cursor-pointer" />
        )}
      </div>

      {/* // Mobille Menu  */}
      <div
        className={
          nav
            ? "overflow-y-hidden md:hidden  ease-in duration-300 absolute  h-screen bg-black/90 w-full   text-gray left-0 top-0"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-550"
        }
      >
        <ul className="w-full h-full text-center pt-12">
          <li className="px-8 text-2xl">Home</li>
          <li className="px-8 text-2xl">Gallery</li>
          <li className="px-8 text-2xl">History</li>
          <li className="px-8 text-2xl">Deals</li>
          <li className="px-8 text-2xl">Contact</li>
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
