import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { VscDebugBreakpointFunction } from 'react-icons/vsc';

const TopBar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const handleShow = () => {
    setShowLogout(!showLogout)
  }
  return (
    <>
      <nav className="h-[9%] W-[100%] w-[100%] md:w-[80%] flex items-center justify-end pr-9 drop-shadow-2xl border-b-2 absolute right-0">
        <div
          className="relative flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full cursor-pointer"
          onClick={handleShow}
        >
          <VscDebugBreakpointFunction className={`absolute left-[-2.5rem] ${showLogout ? 'rotate-[-90deg]' : 'rotate-180' } text-5xl text-gray-400`} />
          <FaUserAlt className="text-6xl" />
          {showLogout && (
            <div className="absolute left-[-8rem] bg-gray-200 w-24 h-16 rounded-lg flex items-center justify-center">
              Logout
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default TopBar
