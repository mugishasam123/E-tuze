import React, { useState, useEffect } from 'react';
import Loader from '../loader/Loader';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../utils/firebase';




const fetchRequest = async (id) => {
  const requestRef = doc(db, 'requests', id);
  const requestSnapshot = await getDoc(requestRef);
  if (requestSnapshot.exists()) {
    return requestSnapshot.data();
  }
  return null;
};


const handleResolve = () => {
  console.log('resolved');
};

const Response = () => {
  const { id } = useParams();
  const [questionaire, setQuestionaire] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequest(id).then((data) => {
      setQuestionaire(data);
      setLoading(false);
      console.log('data', questionaire.Email);
    });
  }, []);
  return (
    <div>
      <section>
        <h1 className='text-center text-3xl font-bold text-gray-600 mt-5'>{id} Diagnosis Q&A</h1>
        <div className='bg-white drop-shadow-lg m-5 py-5 px-9'>
          {
            loading ? (
              <div className='flex flex-col items-center justify-center'>
                <Loader />
              </div>
            ) : (
              Object.keys(questionaire).map((question, index) => (
                  <div key={index} className='mt-5'>
                      <h3 className='md:text-3xl font-bold text-gray-600'>Q: {question}</h3>
                      {Array.isArray(questionaire[question]) ? (
                          <ul>
                              {questionaire[question].map((answer, index) => (
                                  <li key={index} className='ml-4 text-2xl font-bold text-gray-500'>A: {answer}</li>
                              ))}
                          </ul>
                      ): (
                          <span className='ml-4 text-2xl font-bold text-gray-500'>A: {questionaire[question].toString()}</span>
                      )}
                  </div>
              ))
            )
          }
        </div>
      </section>
      <section className='flex flex-col items-center'>
        <h1 className='text-center text-3xl font-bold text-gray-600 mt-5'>Send Recomendation</h1>
        <div className='flex justify-center gap-10 my-10 bg-white drop-shadow-lg py-5 w-[95%]'>
          <a href={`mailto:/#`} className="text-3xl font-semibold tracking-wider px-6 py-4 rounded-xl btn">Via Email</a>
          <button onClick={handleResolve}  className='border border-green-500 text-3xl font-semibold tracking-wider hover:bg-green-100 px-3 py-4 rounded-xl'>Mark As Resolved</button>
        </div>
      </section>
    </div>
  )
}

export default Response;