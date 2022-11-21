import React from 'react';
import JoinText from './JoinText';
import JoinCard from './JoinCard';

const Join = () => (
  <section id='providers' className="md:my-40 ">
    <JoinText />
    <div className="flex flex-col gap-10 mx-20 my-10 md:flex-row md:justify-center">
      <JoinCard
        description="As a therapist, your role is to help people with their mental health needs.
        You have the responsibility of helping them to understand their problems and how to deal with them.
        You will also help them to develop coping skills and strategies to deal with their problems."
        profession="Therapist"
      />
      <JoinCard
        description="As a prescriber, you have the responsibility of prescribing medication to patients.
         You will also help them to understand how to use the medication and how to deal with the side effects.
         You will also help them to develop coping skills and strategies to deal with their problems."
        profession="Prescriber"
      />
    </div>
  </section>
);

export default Join;
