import React from 'react';
import LogoNav from '../../components/common/LogoNav/LogoNav';
import SignupForm from '../../components/common/RegisterForm/SignupForm';
import logo from '../../assets/logo-croped.png';

const Register = () => {
  return (
    <>
    <nav>
      <LogoNav />
    </nav>
    <main className='flex flex-col mt-20 items-center gap-10 pb-10'>
      <div className='w-[80%] md:w-[30%]'>
      <img src={logo} alt='logo' />
      </div>
      <SignupForm />
    </main>
    </>
  )
}

export default Register;
