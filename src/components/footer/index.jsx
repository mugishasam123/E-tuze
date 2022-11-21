import React from 'react';
import Subscribe from './Subscribe';
import QuickLinks from './QuickLinks';
import Bottom from './Bottom';

const Footer = () => {
  return (
    <footer className='footer-color text-white pt-20 px-20 pb-10'>
        <div className='flex flex-col items-center md:justify-between md:flex-row '>
            <Subscribe />
            <QuickLinks />
        </div>
        <Bottom />
    </footer>
  )
}

export default Footer;