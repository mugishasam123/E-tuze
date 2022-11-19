import React from 'react';

const Subscribe = () => {
  return (
    <div>
        <h3 className='text-3xl font-bold text-gray-200'>Subscribe to our newsletter</h3>
        <p className='w-1/2 text-1xl text-center leading-[1]'>Mental health news and tips delivered to your inbox weekly</p>
        <form className='flex relative items-end'>
            <input type='email' placeholder='Enter your email' className='bg-transparent w-[40%] text-lg border-b-2 placeholder:text-xl placeholder:p-2 focus:border-b-green-500 focus:outline-none ' />
            <button className='transition duration-250 font-bold text-xl hover:text-gray-300 hover:scale-110'>Subscribe<span className='text-xl'>&raquo;</span></button>
        </form>
    </div>
  )
}

export default Subscribe;
