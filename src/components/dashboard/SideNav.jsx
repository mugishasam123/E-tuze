import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icon.png';

const SideNav = () => {
  return (
    <aside className='bg-1 w-[25%] absolute top-0 left-[-100%] md:left-0 h-full text-white flex flex-col items-center p-5 gap-20'>
        <div className="logo">
            <a href='/'><img src={Logo} alt="logo" className='w-[35%] mx-auto' /></a>
        </div>
        <div className="menu">
            <ul>
                <li className='mb-5'><Link to='/provider/dashboard/main' className='text-4xl'>Dashboard</Link></li>
                <li className='mb-5'><Link to='/provider/dashboard/requests' className='text-4xl'>Requests</Link></li>
                <li className='mb-5'><Link to='/provider/dashboard/messages' className='text-4xl'>Messages</Link></li>
                <li className='mb-5'><Link to='/provider/dashboard/settings' className='text-4xl'>Settings</Link></li>
            </ul>
        </div>
    </aside>
  )
}

export default SideNav;