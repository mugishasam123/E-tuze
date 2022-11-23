import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { signOut } from "firebase/auth";
import {auth} from '../../utils/firebase';
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate=useNavigate()
  const handleShow = () => {
    setShowLogout(true);
  };
  const handleHide = () => {
    setShowLogout(false);
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
        <nav className='h-[9%] W-[100%] w-[100%] md:w-[75%] flex items-center justify-end pr-9 drop-shadow-2xl border-b-2 absolute right-0'>
            <div className="relative flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full cursor-pointer"  onTouchStart={handleShow} onPointerLeave={handleHide} onClick={handleShow}  onTouchCancel={handleHide}>
                <FaUserAlt onClick={handleSignOut} className='text-6xl' />
                {showLogout && <div  className='absolute left-[-7rem] bg-gray-200 w-24 h-24 rounded-lg flex items-center justify-center'>Logout</div>}
            </div>
      </nav>
    </>
  )
}

export default TopBar
