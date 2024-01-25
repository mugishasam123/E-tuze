import React from 'react'

const RequestCard = ({ request }) => {
  const getStatusText=()=>{
    return request["responseStatus"] ? "responded" : "not responded";
  }
  return (
    <div className="drop-shadow-md border bg-white p-8 my-5 hover:bg-teal-50 flex items-center justify-between">
      <div>
      <h3 className="text-4xl text-gray-600 font-bold">{request['Name']}</h3>
      <span className="text-2xl text-gray-500 mb-1">Sent On: {request['date']}</span>
      <p className="text-2xl text-gray-500 mb-1">From: {request['Email']}</p>
      </div>
      <p className={`py-2 px-3 rounded-full text-white ${request['responseStatus'] ? 'bg-[#d21d1d]' : 'bg-[#36d7b7]'}`}>
        {getStatusText()}
      </p>
    </div>
  )
}

export default RequestCard
