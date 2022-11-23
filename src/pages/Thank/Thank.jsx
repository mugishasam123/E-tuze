import React from 'react'
import { Link } from 'react-router-dom';

const Thank = () => {
  return (
    <main className='flex flex-col items-center gap-3 mt-40'>
      <h1 className='text-4xl font-bold text-center color-1'>Your Data has been submitted successfully!</h1>
      <p className='text-center text-gray-500'>You will receive the response in not later than 24 hours.</p>
      <p className='mx-5 md:w-[40%] text-center text-gray-500'>
        After that, you can then choose to subscribe to E-Tuze platform where you
        will be paired with a Licenced therapist who will regularily check on You
        and help you with your mental health issues and also help you with your day
        to day activities.
      </p>
      <Link to='/' className='mt-10 text-3xl font-semibold tracking-wider px-10 py-4 rounded-xl  btn'>Return to Home</Link>
    </main>
  )
}

export default Thank;
