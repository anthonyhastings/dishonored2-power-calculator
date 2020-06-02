import React, { Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import 'normalize.css';
import './stylesheets/index.scss';
import CharacterSelection from 'Components/character-selection/lazy';
import Loader from 'Components/loader';
import PageNotFound from 'Components/page-not-found/lazy';
import PowerSelectionRouteValidation from 'Components/power-selection/lazy';
import logo660 from 'Images/logo/660x90.png';
import logo1320 from 'Images/logo/1320x180.png';

const namespace = 'app';

const App = ({ onComponentDidMount, showError, showLoader }) => {
  useEffect(() => {
    onComponentDidMount();
  }, [onComponentDidMount]);

  return (
    <div className={namespace}>
      <header className={`${namespace}__header`}>
        <h1 className={`${namespace}__title`}>Power Calculator</h1>
        <Link className={`${namespace}__logo-link`} to="/">
          <img
            alt="Dishonored 2 logo"
            className={`${namespace}__logo-graphic`}
            sizes="100vw"
            srcSet={`${logo660} 660w, ${logo1320} 1320w`}
          />
        </Link>
      </header>
      <div className={`${namespace}__content`}>
        <Loader showError={showError} showLoader={showLoader}>
          <Suspense fallback={<Loader showLoader={true} />}>
            <Switch>
              <Route exact path="/">
                <CharacterSelection />
              </Route>
              <Route path="/powers/:characterSlug">
                <PowerSelectionRouteValidation />
              </Route>
              <Route>
                <PageNotFound />
              </Route>
            </Switch>
          </Suspense>
        </Loader>
      </div>
    </div>
  );
};

App.propTypes = {
  onComponentDidMount: PropTypes.func.isRequired,
  showError: PropTypes.bool.isRequired,
  showLoader: PropTypes.bool.isRequired,
};

export default App;
