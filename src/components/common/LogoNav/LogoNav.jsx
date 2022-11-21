import React from 'react';
import logo from '../../../assets/logo-2.svg';

const LogoNav = () => {
  return (
    <div className='container h-24 border-b-2 flex items-center pl-5 drop-shadow-md'>
        <img src={logo} alt='logo' className='w-80' />
    </div>
  )
}

export default LogoNav;