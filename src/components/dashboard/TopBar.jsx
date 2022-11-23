import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { RiArrowLeftSFill } from 'react-icons/ri';
import { signOut } from "firebase/auth";
import {auth} from '../../utils/firebase';
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate=useNavigate()
  const handleClick = () => {
    setShowLogout(!showLogout);
  };



  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/provider/login')
      console.log("sign out successfully");
    } catch (error) {
      console.log("sign out error", error.message);
    }
  };

  return (
    <>
        <nav className='h-[9%] W-[100%] w-[100%] md:w-[75%] flex items-center justify-between pl-2 pr-9 drop-shadow-2xl border-b-2 absolute right-0'>
            <h1 className='md:text-4xl font-bold text-gray-600'>Bertrand's Dashboard</h1>
            <div className="relative flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full cursor-pointer" onClick={handleClick}>
                <RiArrowLeftSFill className={`absolute left-[-2.4rem] ${ showLogout ? '' : 'rotate-[-90deg]' } text-5xl text-gray-600`} />
                <FaUserAlt className='text-6xl' />
                {showLogout && <div  className='absolute left-[-8rem] bg-gray-300 w-24 h-14 rounded-lg flex items-center justify-center hover:bg-gray-200' onClick={handleSignOut}>Logout</div>}
            </div>
      </nav>
    </>
  )
}

export default TopBar
