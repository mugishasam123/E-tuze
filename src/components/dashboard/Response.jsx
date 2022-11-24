import React, { useState, useEffect } from 'react'
import Loader from '../loader/Loader'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import template from '../../utils/emailTemplate'

const REACT_APP_URI_SENDMAIL =
  'https://us-central1-e-tuze.cloudfunctions.net/sendMail'

const sendMail = async (data) => {
  const response = await fetch(REACT_APP_URI_SENDMAIL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const result = await response.json()
  return result
}

const fetchRequest = async (id) => {
  const requestRef = doc(db, 'requests', id)
  const requestSnapshot = await getDoc(requestRef)
  if (requestSnapshot.exists()) {
    return requestSnapshot.data()
  }
  return null
}

const Response = () => {
  const { id } = useParams()
  const [questionaire, setQuestionaire] = useState(null)
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState({
    recipientEmail: '',
    message: '',
  })
  const [sent, setSent] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setResponse({ ...response, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = sendMail(template(response.recipientEmail, response.message))

    if (result) {
      setSent('Email sent successfully')
      setResponse({ ...response, message: '' })
      console.log(result)
    } else {
      setSent('Email failed to send')
    }
  }

  useEffect(() => {
    fetchRequest(id).then((data) => {
      setQuestionaire(data)
      setLoading(false)
      setResponse({ ...response, recipientEmail: data['Email'] })
    })
  }, [])

  return (
    <div>
      <section>
        <h1 className="text-center text-3xl font-bold text-gray-600 mt-5">
          {id} Diagnosis Q&A
        </h1>
        <div className="bg-white drop-shadow-lg m-5 py-5 px-9">
          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <Loader />
            </div>
          ) : (
            Object.keys(questionaire).map((question, index) => (
              <div key={index} className="mt-5">
                <h3 className="md:text-3xl font-bold text-gray-600">
                  Q: {question}
                </h3>
                {Array.isArray(questionaire[question]) ? (
                  <ul>
                    {questionaire[question].map((answer, index) => (
                      <li
                        key={index}
                        className="ml-4 text-2xl font-bold text-gray-500"
                      >
                        A: {answer}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="ml-4 text-2xl font-bold text-gray-500">
                    A: {questionaire[question].toString()}
                  </span>
                )}
              </div>
            ))
          )}
        </div>
      </section>
      <section className="flex flex-col items-center">
        <h1 className="text-center text-3xl font-bold text-gray-600 mt-5">
          Send Recomendation
        </h1>

        <form className="w-[95%] my-5" onSubmit={handleSubmit}>
          <textarea
            className="w-full h-96 p-5 border border-gray-300 rounded-md"
            name="message"
            value={response.message}
            placeholder="Write your recomendation here..."
            onChange={handleChange}
          />
          <input
            type="submit"
            className="text-3xl font-semibold tracking-wider px-6 py-4 mt-3 rounded-xl btn"
            value="Send"
          />
        </form>
        <p
          className={`text-3xl -translate-y-16 font-semibold px-6 ${
            sent === 'Email sent successfully'
              ? 'text-green-600'
              : 'text-red-500'
          }`}
        >
          {sent}
        </p>
      </section>
    </div>
  )
}

export default Response
