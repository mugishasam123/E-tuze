import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ text,url }) => (
  <Link to={url} className="text-3xl font-semibold tracking-wider px-16 py-4 rounded-xl  btn">{text}</Link>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
