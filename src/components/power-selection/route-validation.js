import React, { Suspense, lazy } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Immutable from 'immutable';
import Loader from 'Components/loader';
import PowerSelection from './container';

const PageNotFound = lazy(() => import('Components/page-not-found'));

const PowerValidationRouteValidation = ({ character }) => {
  if (Immutable.Map.isMap(character)) return <PowerSelection />;
  return (
    <Suspense fallback={<Loader showLoader={true} />}>
      <PageNotFound />
    </Suspense>
  );
};

PowerValidationRouteValidation.propTypes = {
  character: ImmutablePropTypes.map,
};

export default PowerValidationRouteValidation;
