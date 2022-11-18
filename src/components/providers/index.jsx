import React from 'react';
import SlideShow from './SlideShow';
import RightLicenced from './RightLicensed';


const Providers = () => {
  return (
    <section className='flex flex-col-reverse m-2 p-3 space-y-10  items-center justify-center md:flex-row items-stretch justify-around'>
        <RightLicenced />
        <SlideShow />
    </section>
  )
}

export default Providers;