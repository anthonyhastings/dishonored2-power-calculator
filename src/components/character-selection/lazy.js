import { lazy } from 'react';

export default lazy(() =>
  import(
    /* webpackChunkName: "character-selection" */
    './container'
  )
);
