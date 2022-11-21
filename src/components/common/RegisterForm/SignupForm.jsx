import React from 'react';
import Button from '../Button/Button';
import Profession from './Profession';
import SignUp from './SignUp';
import './signup.css';

const SignupForm = () => {
  return (
    <div className='mx-7 my-4 md:w-[35%]'>
        <form className='flex flex-col items-start justify-start w-[100%]'>
          <Profession />
          <SignUp />
          <Button text='Register' />
        </form>
    </div>
  )
}

export default SignupForm;