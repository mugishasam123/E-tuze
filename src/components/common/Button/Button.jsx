import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <button type="button" className="btn w-full md:w-[40%] h-20">{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
