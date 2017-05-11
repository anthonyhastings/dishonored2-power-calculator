import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Loader = function ({children, loaded}) {
  if (loaded === true) {
    return children;
  } else if (_.isError(loaded)) {
    return (
      <h1>ERROR. TRY AGAIN LATER.</h1>
    );
  }

  return (
    <h1>Loading</h1>
  );
};

Loader.propTypes = {
  children: PropTypes.element,
  loaded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.instanceOf(Error)
  ]).isRequired
};

export default Loader;
