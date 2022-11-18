import React from 'react';
import SlideShow from './SlideShow';
import RightLicenced from './RightLicensed';


const Providers = () => {
  return (
    <section className='flex flex-col m-2 p-3 space-y-6 items-center md:flex-row justify-around'>
        <SlideShow />
        <RightLicenced />
    </section>
  )
}

export default Providers;