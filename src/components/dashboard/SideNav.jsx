import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/icon.png';

const SideNav = () => {
  return (
    <aside className='bg-2 w-[25%] absolute top-0 left-[-100%] md:left-0 h-full text-white flex flex-col items-center p-5 gap-20'>
        <div className="logo">
            <a href='/'><img src={Logo} alt="logo" className='w-[35%] mx-auto' /></a>
        </div>
        <div className="menu">
            <ul>
                <li className='mb-5'><NavLink to='/provider/dashboard/main' className='text-4xl hover:text-gray-200'>Dashboard</NavLink></li>
                <li className='mb-5'><NavLink to='/provider/dashboard/requests' className='text-4xl hover:text-gray-200'>Requests</NavLink></li>
                <li className='mb-5'><NavLink to='/provider/dashboard/messages' className='text-4xl hover:text-gray-200'>Messages</NavLink></li>
                <li className='mb-5'><NavLink to='/provider/dashboard/settings' className='text-4xl hover:text-gray-200'>Settings</NavLink></li>
            </ul>
        </div>
    </aside>
  )
}

export default SideNav;