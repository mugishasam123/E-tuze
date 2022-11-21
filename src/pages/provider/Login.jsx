import React from 'react';
import LogoNav from '../../components/common/LogoNav/LogoNav';
import LoginForm from '../../components/common/LoginForm/LoginForm';
import logo from '../../assets/logo-croped.png';

const ProviderLogin = () => {
  return (
    <>
    <nav>
      <LogoNav />
    </nav>
    <main className='flex flex-col mt-20 items-center gap-10'>
      <div className='w-[80%] md:w-[30%]'>
      <img src={logo} alt='logo' />
      </div>
      <LoginForm />
    </main>
    </>
  )
}

export default ProviderLogin;
