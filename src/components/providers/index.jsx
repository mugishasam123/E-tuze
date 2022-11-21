import React from 'react';
import SlideShow from './SlideShow';
import RightLicenced from './RightLicensed';

const Providers = () => (
  <section  className="flex flex-col-reverse m-2 md:my-40 p-3 space-y-10  items-center justify-center md:flex-row items-stretch justify-around">
    <RightLicenced />
    <SlideShow />
  </section>
);

export default Providers;
