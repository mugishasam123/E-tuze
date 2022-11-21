import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <button type="button" className="text-3xl font-semibold tracking-wider px-16 py-4 rounded-xl  btn">{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
