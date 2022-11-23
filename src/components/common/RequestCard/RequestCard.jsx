import React from 'react'

const RequestCard = ({request}) => {
  return (
    <div className='drop-shadow-md border bg-white p-4 my-3 hover:bg-teal-50'>
        <h3 className='text-4xl text-gray-600 font-bold'>{request.name}</h3>
        <span className='text-2xl text-gray-500'>Sent: 12:00 13th,Aug 2022</span>
        <p className='text-2xl text-gray-500'>From: {request.email}</p>
    </div>
  )
}

export default RequestCard;