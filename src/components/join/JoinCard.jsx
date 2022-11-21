import React from 'react';
import PropTypes from 'prop-types';
import { RiMentalHealthFill } from 'react-icons/ri';
import Button from '../common/Button/Button';
import './join-card.css';

const JoinCard = ({ profession, description }) => (
  <div className="join-card border-color flex flex-col gap-10 py-5 items-center text-center">
    <RiMentalHealthFill className="text-8xl color-1" />
    <h2 className="text-5xl text-color font-semibold">{`Join As ${profession}`}</h2>
    <p className="text-2xl text-gray-700 tracking-wide w-[90%]">
      {description}
    </p>
    <div className="w-full">
      <Button text="Continue &raquo;" url='/provider/register' />
    </div>
  </div>
);

JoinCard.propTypes = {
  profession: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default JoinCard;
