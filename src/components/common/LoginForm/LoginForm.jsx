import React from 'react';
import Button from '../Button/Button';

const LoginForm = () => {
  return (
    <div className='w-[90%] md:w-[25%]'>
        <form className='flex flex-col items-start justify-start w-[100%]'>
            <label htmlFor='email' className='text-gray-500'>Email</label>
            <input type='email' name='email' id='email' placeholder='Enter your Email' className='border border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
            <label htmlFor='password' className='text-gray-500'>Password</label>
            <input type='password' name='password' id='password' placeholder='Enter your password' className='border border-gray-500  h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
            <a href='#forgot' className='color-1 font-bold'>Forgot password?</a>
            <div>
            <input type='checkbox' name='remember' id='remember' className='my-5 mr-3 inline-block' />
            <label htmlFor='remember' className='text-gray-500'>Remember Me</label>
            </div>
            <Button text='Log in' />
        </form>
    </div>
  )
}

export default LoginForm;