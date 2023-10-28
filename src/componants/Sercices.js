import React from "react";
import { MdDesignServices } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";
const Sercices = () => {
  return (
    <>
      <p className="text-center text-3xl p-3  mt-12 capitalize bg-gradient-to-r from-gray-100   to-indigo-400   text-transparent bg-clip-text">
        i offer valuable services that help businesses and individuals <br />
        establish a strong online presence
      </p>

      <div className="flex justify-center flex-wrap gap-4  ">
        <div className=" bg-gray-900    border-4 border-gray-900 hover:border-blue-950  transition rounded-sm   m-3 p-4 shadow-gray-60  w-80     ">
          <MdDesignServices className="text-3xl m-2" />
          <div className="   rounded-sm transition shadow-gray-600 ">
            <h3 className="text-2xl m-2">UI/UX design </h3>
            <p className=" m-2">
              {" "}
              UI/UX combines the visual design (UI) with the overall user
              experience (UX) to create engaging and user-friendly digital
              interfaces.
            </p>
          </div>
        </div>
        <div className=" bg-gray-900  rounded-sm   border-4 border-gray-900 hover:border-blue-950  transition  m-3 p-4 shadow-gray-60  w-80     ">
          <BsCodeSlash className="text-3xl m-2" />
          <div className="    rounded-sm  shadow-gray-600 ">
            <h3 className="text-2xl m-2">Frontend development </h3>
            <p className=" m-2">
              {" "}
              Frontend development is important because it plays a vital role in
              creating engaging and intuitive interfaces that meet user
              expectations and drive business success.
            </p>
          </div>
        </div>

        <div className=" bg-gray-900  rounded-sm  border-4 border-gray-900 hover:border-blue-950  transition m-3 p-4   w-80     ">
          <AiFillDatabase className="text-3xl m-2" />
          <div className="   rounded-sm transition shadow-gray-600 ">
            <h3 className="text-2xl m-2"> Backend development </h3>
            <p className=" m-2 ">
              backend development is important because it handles data
              management, business integration with external services, and
              scalability of an application.  
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sercices;
