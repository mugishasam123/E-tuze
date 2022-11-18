import React from 'react';
import JoinText from './JoinText';
import JoinCard from './JoinCard';

const Join = () => (
  <section className="md:my-40">
    <JoinText />
    <div className="flex flex-col gap-10 mx-20 my-10 md:flex-row">
      <JoinCard
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        quibusdam ullam. Numquam facere libero non molestias odit, tempore"
        profession="Therapist"
      />
      <JoinCard
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        quibusdam ullam. Numquam facere libero non molestias odit, tempore"
        profession="Prescriber"
      />
    </div>
  </section>
);

export default Join;
