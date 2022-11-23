import React from 'react';
import { useParams } from 'react-router-dom';

const questionaire = {
  'are you capable of enjoying things right now?': true,
  'are you feeling sad, down, or depressed?': true,
  'are you eating more or less than usual?': ['I am eating more'],
  'are you having thoughts of your own death?': true,
  'How often do you feel like crying?': ['I feel like crying all the time'],
  'How often do you feel like you are worthless?': ['I feel worthless all the time'],
  'How is your family reacting to your situation?': ['My family is not reacting well'],
  'what gender do you identify with?': ['female'],
  'Email': 'ishmweb123@gmail.com',
}

const Response = () => {
    const { id } = useParams();
  return (
    <div>
        <h1 className='text-center text-3xl font-bold text-gray-600 mt-5'>{id} Diagnosis Q&A</h1>
        <div className='bg-white drop-shadow-lg m-5 py-5 px-9'>
            {Object.keys(questionaire).map((question, index) => (
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
            ))}
        </div>
    </div>
  )
}

export default Response;