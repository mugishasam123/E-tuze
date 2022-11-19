import React from 'react';

const Subscribe = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <h3 className='text-3xl font-bold text-gray-200'>Subscribe to our newsletter</h3>
        <p className='w-80 text-3xl text-center leading-[1]'>Mental health news and tips delivered to your inbox weekly</p>
        <form className='flex  items-end w-full justify-center'>
            <input type='email' placeholder='Enter your email' className='bg-transparent text-3xl md:text-2xl w-[70%] border-b-2 placeholder:text-3xl md:placeholder:text-2xl placeholder:p-2 focus:border-b-green-500 focus:outline-none ' />
            <button className='transition duration-250 font-bold text-3xl md:text-2xl hover:text-gray-300 hover:scale-110'>Subscribe<span className='text-4xl md:text-2xl'>&raquo;</span></button>
        </form>
    </div>
  )
}

export default Subscribe;
