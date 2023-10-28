import React from "react";
import js from "../assits/icons8-javascript-480 (1).png";
import ts from "../assits/icons8-typescript-480.png";
import reactIcon from "../assits/icons8-react-js-480.png";
import reduxIcon from "../assits/redux.png";
import nodeJs from "../assits/icons8-nodejs-480.png";
import framer from "../assits/framer-motion.png";
import figma from "../assits/icons8-figma-480.png";
import mongo from "../assits/MongoDB_logo_PNG2.png";
import git from "../assits/icons8-git-480.png";
import next from "../assits/nextjs.512x512.png";

const Skilles = () => {
  return (
  <>
      <h3 className=" text-center text-4xl p-3  mb-12 ">My Skills </h3>
      <div className=" flex justify-center flex-wrap gap-4 ">
      <div className="  bg-gray-900  rounded-sm hover:bg-gray-300 transition shadow-gray-600 flex p-4 h-32 w-32">
        <img src={js} />
      </div>
      <div className="  bg-gray-900  rounded-sm hover:bg-gray-300 transition shadow-gray-600 flex p-4 h-32 w-32">
        <img src={ts} />
      </div> 
      <div className="  bg-gray-900  rounded-sm hover:bg-gray-300 transition shadow-gray-600 flex p-4 h-32 w-32">
        <img src={reactIcon} />
      </div> 
      <div className="  bg-gray-900  rounded-sm hover:bg-gray-300 transition shadow-gray-600 flex p-4 h-32 w-32">
        <img src={framer} />
      </div> 
      <div className="  bg-gray-900  rounded-sm hover:bg-gray-300 transition shadow-gray-600 flex p-4 h-32 w-32">
        <img src={next} />
      </div> 
      <div className="  bg-gray-900  rounded-sm hover:bg-gray-300 transition shadow-gray-600 flex p-4 h-32 w-32">
        <img src={git} />
      </div> 
      <div className="  bg-gray-900  rounded-sm hover:bg-gray-300 transition shadow-gray-600 flex p-4 h-32 w-32">
        <img src={nodeJs} />
      </div> 
      <div className="  bg-gray-900  rounded-sm hover:bg-gray-300 transition shadow-gray-600 flex p-4 h-32 w-32">
        <img src={mongo} />
      </div> 
      <div className="  bg-gray-900  rounded-sm hover:bg-gray-300 transition shadow-gray-600 flex p-4 h-32 w-32">
        <img src={reduxIcon} />
      </div>
      <div className="  bg-gray-900  rounded-sm hover:bg-gray-300 transition shadow-gray-600 flex p-4 h-32 w-32">
        <img src={figma} />
      </div>
     
    </div>
  
    </>
  );
};

export default Skilles;
