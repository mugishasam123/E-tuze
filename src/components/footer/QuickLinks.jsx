import React from 'react';
import logo from '../../assets/logo.png';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const QuickLinks = () => {
  return (
    <div>
        <h3 className='text-3xl font-bold text-gray-600'>Get in touch</h3>

        <div className='flex gap-2'>
            <a href="#" className=''><FaFacebookSquare className='text-3xl text-blue-900 hover:opacity-60' /></a>
            <a href="#" className=''><FaTwitterSquare className='text-3xl text-blue-600 hover:opacity-60' /></a>
            <a href="#" className=''><FaInstagramSquare className='text-3xl text-rose-600 hover:opacity-60' /></a>
            <a href="#" className=''><FaLinkedin className='text-3xl text-blue-900 hover:opacity-60' /></a>
        </div>

        <div>
            <address className='text-gray-700'>
                <p className='text-xl font-bold'>E-Tuze</p>
                <p className='text-xl'>1234 Main Street</p>
                <p className='text-xl'>Anytown, USA 12345</p>
                <p className='text-xl'>Phone: 555-555-5555</p>
                <p className='text-xl'>Email: <a href="mailto:etuze@gmail.com" className='text-blue-900 hover:opacity-60'>etuze@gmail</a> </p>
            </address>
        </div>

    </div>
  )
}

export default QuickLinks;