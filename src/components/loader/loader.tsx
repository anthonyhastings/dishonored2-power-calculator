import React from 'react';
import './stylesheets/loader.scss';
import OutsidersMark from 'components/outsiders-mark';

export interface LoaderProps {
  children?: JSX.Element;
  showError?: boolean;
  showLoader?: boolean;
}

const namespace = 'app-loader';

const Loader: React.FC<LoaderProps> = ({
  children = <React.Fragment></React.Fragment>,
  showError = false,
  showLoader = false,
}): JSX.Element => {
  if (!showError && !showLoader) return children;

  return (
    <div className={namespace}>
      <h2 className={`${namespace}__message`}>
        {showError ? 'Error while loading' : 'Loading'}
      </h2>
      <OutsidersMark animated={showLoader} className={`${namespace}__icon`} />
    </div>
  );
};

export default Loader;
