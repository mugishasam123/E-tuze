import React from 'react';
import PropTypes from 'prop-types';
import { RiMentalHealthFill } from 'react-icons/ri';
import Button from '../common/Button/Button';
import './join-card.css';

const JoinCard = ({ profession, description }) => (
  <div className="join-card flex flex-col gap-10 py-5 justify-between items-center text-center">
    <RiMentalHealthFill className="text-8xl text-blue-500" />
    <h2 className="text-5xl font-bold colored">{`Join As ${profession}`}</h2>
    <p className="text-3xl w-[90%]">
      {description}
    </p>
    <div className="w-full">
      <Button />
    </div>
  </div>
);

JoinCard.propTypes = {
  profession: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default JoinCard;
