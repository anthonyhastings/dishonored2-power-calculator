import { Suspense, useEffect, lazy } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  hasInitialDataFailedSelector,
  isInitialDataIncompleteSelector,
} from 'selectors';
import { useAppSelector, useAppDispatch } from 'store-hooks';
import { fetchCharacters } from 'slices/characters';
import { fetchPowers } from 'slices/powers';
import 'normalize.css';
import './stylesheets/app.scss';
import Loader from 'components/loader';
import logo660 from 'images/logo/660x90.png';
import logo1320 from 'images/logo/1320x180.png';

const CharacterSelection = lazy(
  () =>
    import(
      /* webpackChunkName: "character-selection" */
      'components/character-selection'
    )
);

const PageNotFound = lazy(
  () =>
    import(
      /* webpackChunkName: "page-not-found" */
      'components/page-not-found'
    )
);

const PowerSelectionRouteValidation = lazy(
  () =>
    import(
      /* webpackChunkName: "power-selection" */
      'components/power-selection'
    )
);

const namespace = 'app';

const App: React.FC = (): JSX.Element => {
  const showError = useAppSelector(hasInitialDataFailedSelector);
  const showLoader = useAppSelector(isInitialDataIncompleteSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
    dispatch(fetchPowers());
  }, [dispatch]);

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

export default App;
