import React from 'react'

const RequestCard = ({request}) => {
  return (
    <div className='drop-shadow-md border bg-white p-4 my-3 hover:bg-teal-50'>
        <h3 className='text-4xl text-gray-600 font-bold'>Not yet fetched</h3>
        <span className='text-2xl text-gray-500'>Sent: Not yet fetched</span>
        <p className='text-2xl text-gray-500'>From: {request['Email']}</p>
    </div>
  )
}

export default RequestCard;