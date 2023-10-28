import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { AiFillLinkedin, AiFillGithub, AiFillYoutube } from "react-icons/ai";
const NavBar = () => {
  return (
    <nav className=" flex justify-between border-b-2 border-b-gray-700 py-3">
      <div className="flex items-center gap-2">
        <div  className="bg-gray-500 hover:bg-indigo-500 cursor-pointer rounded-full p-2 ">
          <BiMessageDetail className="text-2xl " />
        </div>
        <span className=" text-xl hover:text-indigo-500 transition duration-200">Get In Touch</span>
      </div>
      <ul className="flex items-center gap-2  text-2xl ">
        <li className="cursor-pointer  md:hidden">
          <AiFillLinkedin />
        </li>
        <li className="cursor-pointer md:hidden">
          <AiFillGithub />
        </li>
        <li className="cursor-pointer md:hidden">
          <AiFillYoutube />
        </li>
        <li className="hidden md:block text-xl hover:text-gray-200 transition duration-200">Linkedin</li>
        <li className="hidden md:block text-xl hover:text-gray-200 transition duration-200">YouTube</li>
        <li className="hidden md:block text-xl hover:text-gray-200 transition duration-200">GitThub</li>
      </ul>
    </nav>
  );
};

export default NavBar;
