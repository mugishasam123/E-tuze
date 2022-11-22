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
                <li className='mb-5'><Link to='/' className='text-4xl'>Home</Link></li>
                <li className='mb-5'><Link to='/' className='text-4xl'>About</Link></li>
                <li className='mb-5'><Link to='/' className='text-4xl'>Contact</Link></li>
                <li className='mb-5'><Link to='/' className='text-4xl'>Services</Link></li>
            </ul>
        </div>
    </aside>
  )
}

export default SideNav;