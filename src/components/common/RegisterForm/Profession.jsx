import React from 'react'

const Profession = () => {
  return (
    <fieldset className='border py-6 px-5'>
        <legend className='text-2xl font-bold text-gray-600'>Profession Details</legend>
        <label htmlFor='resume' className=' text-gray-500 require relative'>Attach your Resume/CV</label>
        <em className='text-gray-500 block'>Only PDF are supported </em>
        <input type='file' name='resume' id='resume' placeholder='Attach Resume/ CV' required className='border border-gray-500 mb-5 w-full rounded-r-xl focus:border-green-600 focus:outline-none' />
        <label htmlFor='profile' className=' text-gray-500 require relative'>Attach your Photo profile</label>
        <em className='text-gray-500 block'>PNG/JPG/JPEG</em>
        <input type='file' name='profile' id='profile' placeholder='Attach photo' required className='border border-gray-500 mb-5 w-full rounded-r-xl focus:border-green-600 focus:outline-none' />
        <div className='my-5'>
            <p className='text-gray-500 require'>Are you independently licenced as a therapist in your state of practice?</p>
            <input type='radio' name='yes' id='yes' className='inline-block' />
            <label htmlFor='yes' className='text-gray-500 mr-5'>Yes</label>
            <input type='radio' name='no' id='no' className='inline-block' />
            <label htmlFor='no' className='text-gray-500'>No</label>
        </div>
        <div className='my-5'>
            <input type='checkbox' name='agree' id='agree' required className='mr-3 inline-block' />
            <label htmlFor='agree' className='text-gray-500'>By providing us with your phone number and clicking "Register",
             you agree that we may call or text you regarding your application.</label>
        </div>
    </fieldset>
  )
}

export default Profession;