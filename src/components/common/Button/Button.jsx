import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text,url }) => (
  <a  href={url} className="text-3xl font-semibold tracking-wider px-16 py-4 rounded-xl  btn">{text}</a>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
