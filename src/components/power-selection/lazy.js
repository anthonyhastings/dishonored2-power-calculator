import { lazy } from 'react';

export default lazy(() =>
  import(
    /* webpackChunkName: "power-selection" */
    './container/route-validation'
  )
);
