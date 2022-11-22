import React, { useState } from 'react';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    remember: 'off',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    e.target.reset();
  };
  return (
    <div className='w-[90%] md:w-[25%]'>
        <form className='flex flex-col items-start justify-start w-[100%]' onSubmit={handleSubmit}>
            <label htmlFor='email' className='text-gray-500'>Email</label>
            <input type='email' name='email' id='email' onChange={handleChange} placeholder='Enter your Email' className='border border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
            <label htmlFor='password' className='text-gray-500'>Password</label>
            <input type='password' name='password' id='password' onChange={handleChange} placeholder='Enter your password' className='border border-gray-500  h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none' />
            <a href='#forgot' className='color-1 font-bold'>Forgot password?</a>
            <div>
            <input type='checkbox' name='remember' id='remember' onChange={handleChange} className='my-5 mr-3 inline-block' />
            <label htmlFor='remember' className='text-gray-500'>Remember Me</label>
            </div>
            <input type='submit' value='Login' className='bg-green-600 text-white font-bold py-2 px-4 rounded-full' />
        </form>
    </div>
  )
}

export default LoginForm;