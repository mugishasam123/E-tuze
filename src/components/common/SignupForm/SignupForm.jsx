import React from 'react';
import Button from '../Button/Button';
import './signup.css';

const SignupForm = () => {
  return (
    <div className='mx-7 md:w-[25%]'>
        <form className='flex flex-col items-start justify-start w-[100%]'>
            <label htmlFor='name' className=' text-gray-500 require relative'>Full name</label>
            <input type='text' name='name' id='name' placeholder='Enter your Full Name' required className='border  border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
            <label htmlFor='phone' className='text-gray-500 require'>Telephone Number</label>
            <input type='tel' name='phone' id='phone' placeholder='+250-000-000-000' required className='border  border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
            <label htmlFor='email' className='text-gray-500 require'>Email</label>
            <input type='email' name='email' id='email' placeholder='Enter your Email' required className='border  border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
            <label htmlFor='password' className='text-gray-500 require'>Password</label>
            <input type='password' name='password' id='password' placeholder='Enter your Password' required className='border  border-gray-500  h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
            <div className='my-5'>
            <input type='checkbox' name='remember' id='remember' className='mr-3 inline-block' />
            <label htmlFor='remember' className='text-gray-500'>By signing up, you agree to the terms and conditions of E-Tuze platform </label>
            </div>
            <Button text='Register' />
        </form>
    </div>
  )
}

export default SignupForm;