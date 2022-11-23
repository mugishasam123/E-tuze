import React from 'react';
import { useParams } from 'react-router-dom';

const Response = () => {
    const { id } = useParams();
  return (
    <div>
        <h1 className='text-center text-5xl font-bold text-gray-600 mt-5'>Response to Request {id}</h1>
    </div>
  )
}

export default Response;