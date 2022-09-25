import { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'normalize.css';
import './stylesheets/app.scss';
import logo660 from './images/logo/660x90.png';
import logo1320 from './images/logo/1320x180.png';
import Loader from '@/components/loader';
import { fetchCharacters } from '@/slices/characters';
import { fetchPowers } from '@/slices/powers';
import { useAppSelector, useAppDispatch } from '@/store-hooks';
import {
  hasInitialDataFailedSelector,
  isInitialDataIncompleteSelector,
} from '@/selectors';

const CharacterSelection = lazy(
  () => import('@/components/character-selection')
);

const PageNotFound = lazy(() => import('@/components/page-not-found'));

const PowerSelectionRouteValidation = lazy(
  () => import('@/components/power-selection')
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
          />
        </Link>
      </header>
      <div className={`${namespace}__content`}>
        <Loader showError={showError} showLoader={showLoader}>
          <Suspense fallback={<Loader showLoader={true} />}>
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/" element={<CharacterSelection />} />
              <Route
                path="/powers/:characterSlug"
                element={<PowerSelectionRouteValidation />}
              />
            </Routes>
          </Suspense>
        </Loader>
      </div>
    </div>
  );
};

export default App;
