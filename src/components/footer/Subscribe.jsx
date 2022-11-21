import React from 'react';

const Subscribe = () => {
  return (
    <div className='flex flex-col  space-y-3'>
        <h3 className=''>Subscribe to our newsletter</h3>
        <p className=''>Mental health news and tips delivered to your inbox weekly</p>
        <form className='flex space-x-2 flex-col md:flex-row space-y-5  '>
            <input type='email' placeholder='Enter your email' className='bg-transparent border border-white px-5 rounded-lg focus:outline-none focus:border-green-500 py-3  ' />
            <button className=' font-semibold tracking-wider px md:px-10 py-3 rounded-xl  btn'>Subscribe <span className='text-4xl  md:text-2xl'>&raquo;</span></button>
        </form>
    </div>
  )
}

export default Subscribe;
