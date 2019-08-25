import React from 'react';
import PropTypes from 'prop-types';
import isError from 'lodash/isError';
import './stylesheets/index.scss';
import OutsidersMark from '../outsiders-mark';

const namespace = 'app-loader';

const Loader = function({ children, loadingState }) {
  if (loadingState === true) return children;

  const hasErrored = isError(loadingState);
  const headingText = hasErrored ? 'Error while loading' : 'Loading';

  return (
    <div className={namespace}>
      <h2 className={`${namespace}__message`}>{headingText}</h2>
      <OutsidersMark animated={!hasErrored} className={`${namespace}__icon`} />
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
