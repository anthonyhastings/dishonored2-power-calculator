import React from 'react';
import './stylesheets/index.scss';
import OutsidersMark from 'Components/outsiders-mark';

const namespace = 'page-not-found';

const PageNotFound = () => (
  <div className={namespace}>
    <h1 className={`${namespace}__message`}>Page Not Found</h1>
    <OutsidersMark animated={false} className={`${namespace}__icon`} />
  </div>
);

export default PageNotFound;
