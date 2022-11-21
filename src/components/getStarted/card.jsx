import React from 'react';

const card = ({bg, title, description, children, border}) => {
  return (
    <div className={`flex w-[70%] flex-col p-6 ${bg} rounded-xl hover:border hover:border-${border}`}>
        <div className='flex justify-between'>
            <h2 className='text-4xl font-bold text-cyan-900'>{title}</h2>
            {children}
        </div>
      <p className='w-[70%] text-gray-600'>{description}</p>
      <a href="#" className='color-1 self-end font-bold'>Continue &raquo;</a>
    </div>
  )
}

export default card;
