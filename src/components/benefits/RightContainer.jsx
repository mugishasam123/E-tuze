import React from 'react';
import { FaCalendarTimes, FaGlobe, FaPiggyBank } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import { RiMentalHealthFill } from 'react-icons/ri';

const RightContainer = () => (
  <div>
    <h2 className="text-6xl font-semibold colored">Benefits of E-Tuze</h2>
    <ul className="mt-10">
      <li className="flex space-x-5 my-5 justify-start items-center text-2xl">
        <RiMentalHealthFill className="text-3xl color-1" />
        {' '}
        <span className='text-gray-700 text-3xl'>Flexible mental health service to meet your plans</span>
        {' '}
      </li>
      <li className="flex space-x-5 my-5 justify-start items-center text-2xl">
        <FaCalendarTimes className="text-3xl color-1" />
        {' '}
        <span className='text-gray-700 text-3xl'>Eliminate commute time and scheduling hassles</span>
        {' '}
      </li>
      <li className="flex space-x-5 my-5 justify-start items-center text-2xl">
        <GiSandsOfTime className="text-3xl color-1" />
        {' '}
        <span className='text-gray-700 text-3xl'>No more waiting at Hospitals</span>
        {' '}
      </li>
      <li className="flex space-x-5 my-5 justify-start items-center text-2xl">
        <FaGlobe className="text-3xl color-1" />
        {' '}
        <span className='text-gray-700 text-3xl'>Access helpful information anytime everywhere</span>
        {' '}
      </li>
      <li className="flex space-x-5 my-5 justify-start items-center text-2xl">
        <FaPiggyBank className="text-3xl color-1" />
        {' '}
        <span className='text-gray-700 text-3xl'>Save time and money</span>
        {' '}
      </li>
    </ul>
  </div>
);

export default RightContainer;
