import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './stylesheets/index.scss';

const namespace = 'button';

const Button = ({ children, href }) => (
  <Link className={namespace} to={href}>
    {children}
  </Link>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default Button;
