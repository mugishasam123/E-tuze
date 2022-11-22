import React from 'react';
import { BiUserCircle } from 'react-icons/bi';


const TopBar = () => {
  return (
    <>
        <nav className='h-[9%] W-[100%] md:w-[75%] flex items-center justify-end pr-9 drop-shadow-2xl border-b-2 absolute right-0'>
          <BiUserCircle className='text-6xl' />  
        </nav>
    </>
  )
}

export default TopBar;