import React from 'react';
import QuestionaireComp from '../../components/questionaire/index';
import defaultSurveyJSON from '../../utils/survey';

const Questionaire = () => {
  return (
    <>
      <main className='mx-2 w-full'>
        <QuestionaireComp
        surveyJSON={defaultSurveyJSON}
        sendDataToServer={(sender) =>console.log('ok')}
        />
      </main>
    </>
  )
}

export default Questionaire;
