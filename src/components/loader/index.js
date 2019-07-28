import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import './stylesheets/index.scss';

const namespace = 'app-loader';

const Loader = function({ children, loadingState }) {
  if (loadingState === true) return children;

  const hasErrored = _.isError(loadingState);
  const headingText = hasErrored ? 'Error while loading' : 'Loading';
  const classes = classNames({
    [namespace]: true,
    [`${namespace}--is-loading`]: !hasErrored
  });

  return (
    <div className={classes}>
      <h2 className={`${namespace}__message`}>{headingText}</h2>
      <div className={`${namespace}__icon-container`}></div>
    </div>
  );
};

Loader.propTypes = {
  children: PropTypes.element,
  loadingState: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.instanceOf(Error)
  ]).isRequired
};

export default Loader;
