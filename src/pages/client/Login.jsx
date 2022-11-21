import React from 'react';
import LogoNav from '../../components/common/LogoNav/LogoNav';
import LoginForm from '../../components/common/LoginForm/LoginForm';

const Login = () => {
  return (
    <>
    <nav>
      <LogoNav />
    </nav>
    <main className='flex flex-col mt-20 items-center gap-10'>
      <h1 className='text-6xl font-bold color-1 '>Log in to your account</h1>
      <p className='text-3xl text-gray-500 w-[30%] text-center'>Log in to continue your therapy journey toward a happier, healthier you.</p>
      <LoginForm />
      <div>
        <span className='text-gray-600 mb-3 block'>Don't have an account? <a href='#' className='color-1 font-bold'>Sign up</a></span>
        <span className='text-gray-600'>E-Tuze provider? <a href='#' className='color-1 font-bold'>Login</a></span>
      </div>
    </main>
    </>
  )
}

export default Login;