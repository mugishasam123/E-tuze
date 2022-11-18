import React from 'react';
import { FaCalendarTimes, FaGlobe,FaPiggyBank } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import { RiMentalHealthFill } from 'react-icons/ri';

const RightContainer = () => {
  return (
    <div>
      <h2 className='heading colored'>Benefits of E-Tuze</h2>
      <ul className='mt-10'>
        <li className='flex space-x-5 my-5 justify-start items-center text-3xl'><RiMentalHealthFill className='text-5xl text-blue-500' /> <span>Flexible mental health service to meet your plans</span> </li>
        <li className='flex space-x-5 my-5 justify-start items-center text-3xl'><FaCalendarTimes className='text-5xl text-blue-500' /> <span>Eliminate commute time and scheduling hassles</span> </li>
        <li className='flex space-x-5 my-5 justify-start items-center text-3xl'><GiSandsOfTime className='text-5xl text-blue-500' /> <span>No more waiting at Hospitals</span> </li>
        <li className='flex space-x-5 my-5 justify-start items-center text-3xl'><FaGlobe className='text-5xl text-blue-500' /> <span>Access helpful information anytime everywhere</span> </li>
        <li className='flex space-x-5 my-5 justify-start items-center text-3xl'><FaPiggyBank className='text-5xl text-blue-500' /> <span>Save time and money</span> </li>
      </ul>
    </div>
  )
}

export default RightContainer;