import React, { useState } from 'react'

const questions = [
  {
    id: 1,
    question: 'Where do you live?',
    choice: ['Kigali', 'Rubavu', 'Muhanga', 'Rusizi'],
  },
  {
    id: 2,
    question: 'What is your gender?',
    choice: ['Male', 'Female', 'Transgender', 'Prefer not to say'],
  },
  {
    id: 3,
    question: 'How do you feel when you are with others?',
    choice: ['Excited', 'Shy', 'Bored', 'Anxious'],
  },
]

const QuestionaireComp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const handleClick = () => {
    setCurrentQuestion(currentQuestion + 1);
  }

  if(currentQuestion > questions.length) {
    return <h1>Thank you for your time</h1>
    }

  return (
    <form>
      {questions
        .filter((question) => question.id === currentQuestion)
        .map((item) => (
          <>
            <label className="text-2xl font-bold text-center mb-10">
              {item.question}
            </label>
            <ul className="border rounded-md text-center">
              {item.choice.map((choice, index) => (
                <>
                  <option
                    key={index}
                    onClick={handleClick}
                    value={choice}
                    className="border-b py-4 cursor-pointer"
                  >
                    {choice}
                  </option>
                </>
              ))}
            </ul>
          </>
        ))}
    </form>
  )
}

export default QuestionaireComp
