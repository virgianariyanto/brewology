import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { MdOutlineMenuBook, MdHome, MdCall } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);
  
  return (
    <header className="w-full fixed right-o left-0 top-0 bg-gradient-to-b from-black/100 to-transparent pb-6">

      {/* Sidebar Section */}
      {nav ? (
        <div className="bg-black/60 fixed z-10 w-full h-screen left-0 bottom-0"></div>
      ) : (
        ""
      )}

      <div className={
          nav
            ? "fixed z-10 w-[300px] left-0 top-0 bottom-0 bg-white duration-500"
            : "fixed z-10 w-[300px] -left-100 top-0 bottom-0 bg-white duration-500"
        }>
        <AiOutlineClose onClick={() => setNav(!nav)} size={20} className="top-4 right-4 absolute cursor-pointer text-slate-600" />
        <h2 className="text-3xl text-slate-300 p-4">
          Brew<span className="font-bold">ology</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4">
            <li className="flex items-center text-xl py-2 text-slate-200">
              <MdHome className="mr-4" size={25} />
              <span className="text-[17px]">Home</span>
            </li>
            <li className="flex items-center text-xl py-2 text-slate-200">
              <MdOutlineMenuBook className="mr-4" size={25} />
              <span className="text-[17px]">Menu</span>
            </li>
            <li className="flex items-center text-xl py-2 text-slate-200">
              <GrGallery className="mr-4" size={25} />
              <span className="text-[17px]">Gallery</span>
            </li>
            <li className="flex items-center text-xl py-2 text-slate-200">
              <MdCall className="mr-4" size={25} />
              <span className="text-[17px]">Contact</span>
            </li>
          </ul>
        </nav>
      </div>
      {/* End Sidebar Section */}

      <div className="w-5/6 mx-auto flex justify-between items-end">
        {/* Menu Icon */}
        <AiOutlineMenu size={30} onClick={() => setNav(!nav)} className="md:hidden cursor-pointer" />
        {/* End Menu Icon */}

        {/* Logo Section */}
        <span className="text-4xl hidden md:block"><span className="font-bold">Brew</span>ology</span>
        {/* End Logo Section */}

        {/* Navbar Section */}
        <nav className="">
          <ul className="hidden md:flex md:items-end">
            <li className="mr-4">Home</li>
            <li className="mr-4">About</li>
            <li className="">Contact</li>
          </ul>
        </nav>
        {/* End Navbar Section */}

        {/* Sosmed Section */}
        <div>
          <ul className="hidden md:flex md:items-end">
            <li className="mr-4"><LuInstagram /></li>
            <li className="mr-4"><RiTwitterXLine /></li>
            <li className=""><FaTiktok /></li>
          </ul>
        </div>
        {/* End Sosmed Section */}

        <span className="text-4xl md:hidden"><span className="font-bold">Brew</span>ology</span>
      </div>
    </header>
  );
}

export default Header;