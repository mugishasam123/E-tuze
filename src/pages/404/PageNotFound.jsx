import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../assets/Lost-tourist-404.png';

const PageNotFound = () => {
  return (
    <div className='flex flex-col items-center pt-20 absolute h-full w-full gap-5'>
      <img src={Image} alt="Lost tourist" className='w-[30%] h-[30%] md:w-[25%] md:h-[40%]' />
        <h1 className='text-5xl md:text-7xl text-gray-600 font-bold text-center'>Page Not Found</h1>
        <Link to='/' className='text-center btn mt-10 hover:opacity-90'>Return Home</Link>
    </div>
  )
}

export default PageNotFound;