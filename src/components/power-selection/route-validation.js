import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Immutable from 'immutable';
import PageNotFound from 'Components/page-not-found/lazy';
import PowerSelection from './container';

const PowerValidationRouteValidation = ({ character }) => {
  if (Immutable.Map.isMap(character)) return <PowerSelection />;
  return <PageNotFound />;
};

PowerValidationRouteValidation.propTypes = {
  character: ImmutablePropTypes.map
};

export default PowerValidationRouteValidation;
