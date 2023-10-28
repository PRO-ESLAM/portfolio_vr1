import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center flex-col items-center py-8 '>
               
          <p className=' text-2xl capitalize text-center py-8 bg-gradient-to-r border-t border-zinc-600 from-gray-100   to-indigo-400   text-transparent bg-clip-text md:text-4xl'>Tell me about your next project</p>
           <a className=' bg-indigo-800 w-f p-2 m-2 rounded-sm hover:scale-150 hover:text-gray-900 hover:bg-blue-600 transition duration-200 ' href='#'>Get In Touch</a>
        </div>
      
    );
}

export default Contact;
