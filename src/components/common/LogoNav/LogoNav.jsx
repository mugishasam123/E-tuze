import React from 'react';
import logo from '../../../assets/logo-croped.png';

const LogoNav = () => {
  return (
    <a href='/' className='h-24 border-b-2 flex items-center pl-5 drop-shadow-md' >
        <img src={logo} alt='logo' className='w-80 p-5' />
    </a>
  )
}

export default LogoNav;