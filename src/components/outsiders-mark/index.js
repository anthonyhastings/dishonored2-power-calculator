import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';
import './stylesheets/index.scss';

const namespace = 'outsiders-mark';

const OutsidersMark = ({ animated = false, className }) => {
  const classes = classNames({
    [namespace]: true,
    [`${namespace}--is-animating`]: animated,
    [className]: !isEmpty(className)
  });

  return <div aria-hidden="true" className={classes} />;
};

OutsidersMark.propTypes = {
  animated: PropTypes.bool,
  className: PropTypes.string
};

export default OutsidersMark;
