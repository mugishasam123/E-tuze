import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Subscribe = () => {
  const [sent, setSent] = useState('');
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_nyersl6',
      'template_3meox0i',
      form.current,
      'fRMYQFGx6UalPBztd',
    );

    e.target.reset();
    setSent('Thank you for subscribing!');
  };
  return (
    <div className='flex flex-col  space-y-3'>
        <h3>Subscribe to our newsletter</h3>
        <p>Mental health news and tips delivered to your inbox weekly</p>
        <form className='flex space-x-2 flex-col md:flex-row space-y-5' ref={form} onSubmit={sendEmail}>
            <input type='email' placeholder='Enter your email' name='from_name' className='bg-transparent border border-white px-5 rounded-lg focus:outline-none focus:border-green-500 py-3  ' />
            <button className=' font-semibold tracking-wider px md:px-10 py-3 rounded-xl  btn'>Subscribe <span className='text-4xl  md:text-2xl'>&raquo;</span></button>
        </form>
        <p className='text-green-500'>{sent}</p>
    </div>
  )
}

export default Subscribe;
