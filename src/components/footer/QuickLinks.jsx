import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const QuickLinks = () => {
  return (
    <div className='text-white md:text-grey-600'>
        <h3 className='text-center text-3xl font-bold'>Get in touch</h3>

        <div className='flex justify-center gap-2 mb-3 text-5xl'>
            <a href="#"><FaFacebookSquare className=' text-blue-600 hover:opacity-60' /></a>
            <a href="#"><FaTwitterSquare className=' text-blue-500 hover:opacity-60' /></a>
            <a href="#"><FaInstagramSquare className=' text-rose-600 hover:opacity-60' /></a>
            <a href="#"><FaLinkedin className=' text-blue-400 hover:opacity-60' /></a>
        </div>

        <h4 className='text-center font-bold'>Address</h4>
        <address className='grid grid-rows-2 grid-flow-col'>
            <p className='md:text-xl'>KK St 555</p>
            <p className='md:text-xl mr-4'>Gikondo,Kigali</p>
            <p className='md:text-xl'>Email: <a href="mailto:etuze@gmail.com" className='color-1 hover:opacity-60'>etuze@gmail.com</a> </p>
            <p className='md:text-xl'>Phone: 555-555-5555</p>
        </address>
    </div>
  )
}

export default QuickLinks;