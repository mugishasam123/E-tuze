import React from 'react';
import SlideShow from './SlideShow';
import RightLicenced from './RightLicensed';

const Providers = () => (
  <section  className="flex flex-col-reverse m-2 md:my-40 p-12 md:p-0 space-y-10  md:space-x-12 justify-center md:flex-row ">
    <RightLicenced />
    <SlideShow />
  </section>
);

export default Providers;
