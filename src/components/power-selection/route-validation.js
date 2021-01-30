import { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import isObject from 'lodash/isObject';
import Loader from 'Components/loader';
import PowerSelection from './container';

const PageNotFound = lazy(() => import('Components/page-not-found'));

const PowerValidationRouteValidation = ({ character }) => {
  if (isObject(character)) return <PowerSelection />;
  return (
    <Suspense fallback={<Loader showLoader={true} />}>
      <PageNotFound />
    </Suspense>
  );
};

PowerValidationRouteValidation.propTypes = {
  character: PropTypes.object,
};

export default PowerValidationRouteValidation;
