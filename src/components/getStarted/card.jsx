import React from 'react';
import { Link } from 'react-router-dom';

const card = ({bg, title, description, children}) => {
  return (
    <div className={`flex w-[70%] flex-col p-6 ${bg} rounded-xl hover:scale-105`}>
        <div className='flex justify-between'>
            <h2 className='text-4xl font-bold text-cyan-900'>{title}</h2>
            {children}
        </div>
      <p className='w-[70%] text-gray-600'>{description}</p>
      <Link to="/questionaire" className='color-1 self-end font-bold'>Continue &raquo;</Link>
    </div>
  )
}

export default card;
