import React from 'react';
import './signup.css';

const SignupForm = () => {
  return (
    <div className="mx-7 my-4 md:w-[35%]">
      <form className="flex flex-col items-start justify-start w-[100%]">
        <fieldset className="border py-6 px-5">
          <legend className="text-2xl font-bold text-gray-600">
            Profession Details
          </legend>
          <label htmlFor="resume" className=" text-gray-500 require relative">
            Attach your Resume/CV
          </label>
          <em className="text-gray-500 block">Only PDF are supported </em>
          <input
            type="file"
            name="resume"
            id="resume"
            placeholder="Attach Resume/ CV"
            required
            className="border border-gray-500 mb-5 w-full rounded-r-xl focus:border-green-600 focus:outline-none"
          />
          <label htmlFor="profile" className=" text-gray-500 require relative">
            Attach your Photo profile
          </label>
          <em className="text-gray-500 block">PNG/JPG/JPEG</em>
          <input
            type="file"
            name="profile"
            id="profile"
            placeholder="Attach photo"
            required
            className="border border-gray-500 mb-5 w-full rounded-r-xl focus:border-green-600 focus:outline-none"
          />
          <div className="my-5">
            <label className="text-gray-500 block">
              <span className="require mr-5"></span>Are you independently
              licenced as a therapist in your state of practice?
            </label>
            <input type="radio" name="yes" id="yes" className="inline-block" />
            <label htmlFor="yes" className="text-gray-500 mr-5">
              Yes
            </label>
            <input type="radio" name="no" id="no" className="inline-block" />
            <label htmlFor="no" className="text-gray-500">
              No
            </label>
          </div>
          <div className="my-5">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              required
              className="mr-3 inline-block"
            />
            <label htmlFor="agree" className="text-gray-500">
              <span className="require mr-5"></span>By providing us with your
              phone number and clicking "Register", you agree that we may call
              or text you regarding your application.
            </label>
          </div>
        </fieldset>
        <fieldset className="border py-6 px-5 my-3">
          <legend className="text-2xl font-bold text-gray-600">Sign Up</legend>
          <label htmlFor="name" className=" text-gray-500 require relative">
            Full name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Full Name"
            required
            className="border  border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none"
          />
          <label htmlFor="phone" className="text-gray-500 require">
            Telephone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+250-000-000-000"
            required
            className="border  border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none"
          />
          <label htmlFor="email" className="text-gray-500 require">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            required
            className="border  border-gray-500 mb-5 h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none"
          />
          <label htmlFor="password" className="text-gray-500 require">
            Create Password
          </label>
          <em className="text-gray-500 block">
            Password length should be greater than 6 characters{' '}
          </em>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your Password"
            required
            className="border  border-gray-500  h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none"
          />
          <label htmlFor="password" className="text-gray-500 require">
            Confirm Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Re-enter your Password"
            required
            className="border  border-gray-500  h-16 w-full rounded-xl placeholder:px-2 p-3 focus:border-green-600 focus:outline-none"
          />
          <div className="my-5">
            <input
              type="checkbox"
              name="accept"
              id="accept"
              required
              className="mr-3 inline-block"
            />
            <label htmlFor="accept" className="text-gray-500">
              <span className="require mr-5"></span>By signing up, you agree to
              the terms and conditions of E-Tuze platform{' '}
            </label>
          </div>
        </fieldset>
        <input
          type="submit"
          value="Register"
          className="bg-green-600 text-white font-bold py-2 px-4 rounded-xl"
        />
      </form>
    </div>
  )
}

export default SignupForm
