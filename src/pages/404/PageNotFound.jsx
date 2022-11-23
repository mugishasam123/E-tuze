import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/Lost-tourist-404.png';

const PageNotFound = () => {
  return (
    <div className='flex flex-col items-center  space-y-12 pt-32'>
     
       <div className='flex flex-col items-center space-y-8'>
       <img src={Image} alt="Lost tourist" className='w-[30%] h-[30%] md:w-[25%] md:h-[40%]' />
       <h1 className='text-5xl md:text-7xl text-gray-600 font-bold text-center'>Page Not Found</h1>

       </div>
       <Link to='/' className='text-3xl font-semibold tracking-wider px-10 py-4 rounded-xl  btn'>Return Home</Link>
       
    </div>
  )
}

export default PageNotFound;