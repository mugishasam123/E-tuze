import React, { useState, useEffect } from 'react'
import RequestCard from '../common/RequestCard/RequestCard'
import Loader from '../loader/Loader'
import { Link } from 'react-router-dom'
import { db } from '../../utils/firebase'
import { collection, getDocs } from 'firebase/firestore'

const fetchRequests = async () => {
  const requests = []
  const requestsRef = collection(db, 'requests')
  const requestsSnapshot = await getDocs(requestsRef)
  requestsSnapshot.forEach((doc) => {
    requests.push({ ...doc.data(), id: doc.id })
  })
  return requests
}

const Requests = () => {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchRequests().then((data) => {
      setRequests(data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <h1 className="text-center text-5xl font-bold text-gray-600 mt-5">
        Client's Requests
      </h1>
      <main className="mx-2 w-full">
        <div className="p-5 mt-1">
          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <Loader />
            </div>
          ) : (
            requests.map((request) => (
              <Link
                to={`/provider/dashboard/requests/${request.id}`}
                key={request.id}
              >
                <RequestCard key={request.id} request={request} />
              </Link>
            ))
          )}
        </div>
      </main>
    </>
  )
}

export default Requests
