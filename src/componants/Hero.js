import React from 'react';
import me from '../assits/me.png'
const Hero = () => {
    return (
        <div className='flex flex-col items-center gap-3  py-7'>
          <div className=' w-56 rounded-full overflow-hidden m-1'>
             <img src={me} className=' w-full'></img>
          </div>
          <span className=' text-sm'>Hi I'm Eslam </span>
          <p className=' text-2xl capitalize text-center  bg-gradient-to-r from-gray-100   to-indigo-400   text-transparent bg-clip-text md:text-4xl'> I'm A mern-stack Web Developer With a possion for <br/> learning and developing new skills..</p>
           <a className=' bg-gray-600  p-2 rounded-sm hover:scale-75 hover:bg-indigo-800 transition duration-200 ' href='#'>Resume</a>
        </div>
    );
}

export default Hero;
