import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const TopBar = () => {
  return (
    <>
        <nav className='h-[9%] W-[100%] w-[100%] md:w-[75%] flex items-center justify-end pr-9 drop-shadow-2xl border-b-2 absolute right-0'>
            <div className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full">
                <FaUserAlt className='text-6xl' />
            </div>
        </nav>
    </>
  )
}

export default TopBar;