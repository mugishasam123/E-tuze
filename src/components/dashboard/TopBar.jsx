import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { RiArrowLeftSFill } from 'react-icons/ri';
import { signOut } from "firebase/auth";
import {auth} from '../../utils/firebase';
import { useNavigate } from "react-router-dom";

const TopBar = ({name, photoUrl}) => {

  const [showLogout, setShowLogout] = useState(false);
  const navigate=useNavigate()
  const handleClick = () => {
    setShowLogout(!showLogout);
  };


  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/provider/login')
    } catch (error) {
      alert("sign out error", error.message);
    }
  };

  return (
    <>
        <nav className='h-[9%] W-[100%] w-[100%] md:w-[75%] flex items-center justify-between pl-2 pr-9 drop-shadow-2xl border-b-2 absolute right-0'>
            <h1 className='md:text-4xl font-bold text-gray-600'>{name} Dashboard</h1>
            <div className="relative flex items-center justify-center bg-gray-200 rounded-full border-2 border-gray-200 cursor-pointer" onClick={handleClick}>
                <RiArrowLeftSFill className={`absolute left-[-2.4rem] ${ showLogout ? '' : 'rotate-[-90deg]' } text-5xl text-gray-600`} />
                <img src={photoUrl} alt="user" className="w-20 h-20 rounded-full" />
                {showLogout && <div  className='absolute left-[-8rem] bg-gray-300 w-24 h-14 rounded-lg flex items-center justify-center hover:bg-gray-200' onClick={handleSignOut}>Logout</div>}
            </div>
      </nav>
    </>
  )
}

export default TopBar;
