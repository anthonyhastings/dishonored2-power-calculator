import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import './stylesheets/index.scss';

const namespace = 'button';

const Button = ({ children, className, href }) => {
  const classes = classNames({
    [namespace]: true,
    [className]: !isEmpty(className),
  });

  return (
    <Link className={classes} to={href}>
      {children}
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export default Button;
