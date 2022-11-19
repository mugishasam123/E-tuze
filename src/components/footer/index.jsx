import React from 'react';
import Subscribe from './Subscribe';
import QuickLinks from './QuickLinks';
import Bottom from './Bottom';

const Footer = () => {
  return (
    <footer className='bg-1 text-white py-8'>
        <div className='flex flex-col items-center md:justify-around md:flex-row'>
            <Subscribe />
            <QuickLinks />
        </div>
        <Bottom />
    </footer>
  )
}

export default Footer;