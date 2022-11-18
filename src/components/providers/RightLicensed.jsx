import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

const sickness = ['Depression', 'Anxiety', 'Stress', 'Relationship', 'Family', 'Work', 'School', 'Anxiety & Stress', 'Anxiety & Stress', 'Anxiety & Stress','Anxiety & Stress', 'Anxiety & Stress', 'Anxiety & Stress', 'Anxiety & Stress', 'Anxiety & Stress', 'Anxiety & Stress', 'Anxiety & Stress'];

const RightLicenced = () => {
  return (
    <div className='w-full  md:w-[50%]'>
      <h2 className='heading colored leading-[1] my-10'>Meet our network of Licenced providers</h2>
      <p className='mt-1'>We have a network of licenced providers who are ready to help you with your mental health needs. </p>
      <div>
        <ul className='grid grid-cols-2 grid-flow-row justify-items-start  my-3 mx-4 md:grid-cols-3'>
          {
            sickness.map((item) => (
              <li className='flex my-2 justify-center items-center gap-2 text-2xl' key={item}>
                <BsCheckLg className='text-sm text-blue-500' />
                {item}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default RightLicenced;