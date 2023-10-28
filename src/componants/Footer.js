import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillYoutube } from "react-icons/ai";
const Footer = () => {
    return (
        <footer>
            <div className=' flex  justify-around items-center pt-16 flex-wrap  '>
                <h2 className='text-xl capitalize    text-center  text-gray-300 bg-clip-text '>&copy; All Reight Reserved 2023 Mede By <span className='text-xl '> Xrow(Eslam) </span></h2>

         
        <ul className=' text-3xl flex gap-5 mt-1'>
        <li className="cursor-pointer  hover:scale-150 hover:text-blue-900 transition duration-200  ">
          <AiFillLinkedin  />
        </li>
        <li className="cursor-pointer  hover:scale-150 hover:text-blue-900 transition duration-200 ">
          <AiFillGithub />
        </li>
        <li className="cursor-pointer  hover:scale-150   hover:text-blue-900 transition duration-200 ">
          <AiFillYoutube />
        </li>
      </ul>
      </div>
        </footer>
    );
}

export default Footer;
