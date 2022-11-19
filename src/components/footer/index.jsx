import React from 'react';
import Subscribe from './Subscribe';
import QuickLinks from './QuickLinks';
import Bottom from './Bottom';

const Footer = () => {
  return (
    <footer className='bg-1 text-white'>
        <div className='flex justify-around'>
            <Subscribe />
            <QuickLinks />
        </div>
        <Bottom />
    </footer>
  )
}

export default Footer;