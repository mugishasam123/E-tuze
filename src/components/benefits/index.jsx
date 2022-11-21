import React from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

const Benefit = () => (
  <section  className="flex flex-col m-2 p-12 md:p-0 md:my-40 space-y-6 items-center md:flex-row justify-around">
    <LeftContainer />
    <RightContainer />
  </section>
);

export default Benefit;
