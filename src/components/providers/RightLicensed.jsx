import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const sickness = ['Depression', 'Relationships', 'Parenting', 'Chronic illness', 'Eating Disorders', 'Anger managemnet', 'Anxiety & Stress', 'Childhood abuse', 'Mood disorders', 'OCD', 'Trauma & Grief', 'Substance abuse', 'Family conflict', 'Addiction...'];

const RightLicenced = () => (
  <div className="w-full  md:w-[50%] space-y-6 mt-12 md:mt-0">
    <h2 className="text-6xl font-semibold colored">Meet our network of Licenced providers</h2>
    <p className="text-gray-700 text-3xl">We have a network of licenced providers who are ready to help you with your mental health needs. </p>
    <div>
      <ul className="grid grid-cols-2 grid-flow-row justify-items-start  my-3 mx-4 md:grid-cols-3">
        {
            sickness.map((item) => (
              <li className="flex my-2 justify-center items-center gap-2 text-2xl" key={`${item}`}>
                <BsCheckLg className="text-sm color-1" />
                <span className='text-gray-800'>{item}</span>
              </li>
            ))
          }
      </ul>
    </div>
    <Link
      to="/get-started"
      className="text-3xl font-semibold tracking-wider px-16 py-4 rounded-xl  btn mt-4"
    >
      Get Matched
    </Link>
  </div>
);

export default RightLicenced;
