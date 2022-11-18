import React from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

const Benefit = () => {
  return (
    <section className="flex flex-col m-2 p-3 space-y-6 items-center md:flex-row justify-around">
      <LeftContainer />
      <RightContainer />
    </section>
  )
}

export default Benefit;
