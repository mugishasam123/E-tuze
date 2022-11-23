import React from 'react';
import RequestCard from '../common/RequestCard/RequestCard';
import { Link } from 'react-router-dom';

const requests = [
  {
    id: 1,
    name: 'John Doe',
    email: 'ishimweb123gmail.com',
    phone: '078888888',
    message: 'I would like to book a room',
  },
  {
    id: 2,
    name: 'Bertrand',
    email: 'ishimweb123gmail.com',
    phone: '078888888',
    message: 'I would like to book a room',
  },
  {
    id: 3,
    name: 'Samuel',
    email: 'ishimweb123gmail.com',
    phone: '078888888',
    message: 'I would like to book a room',
  },
]

const Requests = () => {
  return (
    <div>
      <h1 className='text-center text-5xl font-bold text-gray-600 mt-5'>Client's Requests</h1>
      <main className='p-5 mt-1'>
        {requests.map((request) => (
          <Link to={`/provider/dashboard/requests/${request.id}`} key={request.id}>
            <RequestCard key={request.id} request={request} />
          </Link>
        ))}
      </main>
    </div>
  )
}

export default Requests;