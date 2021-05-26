import { Suspense, useEffect, lazy } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import 'normalize.css';
import './stylesheets/index.scss';
import Loader from 'components/loader';
import logo660 from 'images/logo/660x90.png';
import logo1320 from 'images/logo/1320x180.png';

const CharacterSelection = lazy(() =>
  import(
    /* webpackChunkName: "character-selection" */
    'components/character-selection/container'
  )
);

const PageNotFound = lazy(() =>
  import(
    /* webpackChunkName: "page-not-found" */
    'components/page-not-found'
  )
);

const PowerSelectionRouteValidation = lazy(() =>
  import(
    /* webpackChunkName: "power-selection" */
    'components/power-selection/container/route-validation'
  )
);

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
            draggable="false"
            sizes="100vw"
            srcSet={`${logo660} 660w, ${logo1320} 1320w`}
            width="660"
            height="90"
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
