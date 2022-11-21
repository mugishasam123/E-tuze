import React from 'react'

const SignUp = () => {
  return (
    <fieldset className='border py-6 px-5 my-3'>
        <legend className='text-2xl font-bold text-gray-600'>Sign Up</legend>
        <label htmlFor='name' className=' text-gray-500 require relative'>Full name</label>
        <input type='text' name='name' id='name' placeholder='Enter your Full Name' required className='border  border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
        <label htmlFor='phone' className='text-gray-500 require'>Telephone Number</label>
        <input type='tel' name='phone' id='phone' placeholder='+250-000-000-000' required className='border  border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
        <label htmlFor='email' className='text-gray-500 require'>Email</label>
        <input type='email' name='email' id='email' placeholder='Enter your Email' required className='border  border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
        <label htmlFor='password' className='text-gray-500 require'>Create Password</label>
        <em className='text-gray-500 block'>Password length should be greater than 6 characters </em>
        <input type='password' name='password' id='password' placeholder='Enter your Password' required className='border  border-gray-500  h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
        <label htmlFor='password' className='text-gray-500 require'>Confirm Password</label>
        <input type='password' name='password' id='password' placeholder='Re-enter your Password' required className='border  border-gray-500  h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
        <div className='my-5'>
        <input type='checkbox' name='accept' id='accept' required className='mr-3 inline-block' />
        <label htmlFor='accept' className='text-gray-500'><span className='require mr-5'></span>By signing up, you agree to the terms and conditions of E-Tuze platform </label>
        </div>
    </fieldset>
  )
}

export default SignUp;