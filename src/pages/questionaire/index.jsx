import React from 'react';
import LogoNav from '../../components/common/LogoNav/LogoNav';
import QuestionaireComp from '../../components/questionaire/index';

const Questionaire = () => {
  return (
    <>
      <nav>
        <LogoNav />
      </nav>
      <main className='flex flex-col items-center my-20 mx-auto md:w-[40%]'>
        <QuestionaireComp />
      </main>
    </>
  )
}

export default Questionaire;
