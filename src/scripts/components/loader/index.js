import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import './stylesheets/index.scss';

const Loader = function ({children, loadingState}) {
  if (loadingState === true) {
    return children;
  }

  const hasErrored = _.isError(loadingState);
  const headingText = (hasErrored) ? 'Error while loading.' : 'Loading';
  const classes = classNames(`${Loader.namespace}__container`, {
    [`${Loader.namespace}__container--is-loading`]: !hasErrored
  });

  return (
    <div className={classes}>
      {headingText}
    </div>
  );
};

Loader.namespace = 'app-loader';
Loader.propTypes = {
  children: PropTypes.element,
  loadingState: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.instanceOf(Error)
  ]).isRequired
};

export default Loader;
