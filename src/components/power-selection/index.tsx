import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from 'store-hooks';
import type { RootState } from 'store';
import {
  characterBySlugSelector,
  topLevelEnhancementsSelector,
  topLevelPowersByCharacterSlugSelector,
} from 'selectors';
import isUndefined from 'lodash/isUndefined';
import Avatar from 'components/avatar';
import Button from 'components/button';
import Loader from 'components/loader';
import './stylesheets/index.scss';
import PowersList from './powers-list';

interface RouteParams {
  characterSlug: CharacterSlugs;
}

const PageNotFound = lazy(() => import('components/page-not-found'));

const namespace = 'power-selection';

const PowerSelection: React.FC = (): JSX.Element => {
  const { characterSlug } = useParams<RouteParams>();
  const topLevelEnhancements = useAppSelector(topLevelEnhancementsSelector);
  const topLevelPowers = useAppSelector((state: RootState) =>
    topLevelPowersByCharacterSlugSelector(state, characterSlug)
  );
  const character = useAppSelector((state: RootState) =>
    characterBySlugSelector(state, characterSlug)
  );

  if (isUndefined(character)) {
    return (
      <Suspense fallback={<Loader showLoader={true} />}>
        <PageNotFound />
      </Suspense>
    );
  }

  return (
    <section className={namespace}>
      <header className={`${namespace}__header`}>
        <h1 className={`${namespace}__title`}>
          {character.name}
          <br />
          Select your powers
        </h1>
        <Avatar
          className={`${namespace}__avatar`}
          name={character.name}
          slug={character.slug}
        />
      </header>

      <div className={`${namespace}__categories`}>
        <PowersList
          className={`${namespace}__category`}
          powers={topLevelPowers}
        >
          Top-level Powers
        </PowersList>
        <PowersList
          className={`${namespace}__category`}
          powers={topLevelEnhancements}
        >
          Top-level Enhancements
        </PowersList>
      </div>

      <footer className={`${namespace}__footer`}>
        <Button className={`${namespace}__back-cta`} href="/">
          Back to character selection
        </Button>
      </footer>
    </section>
  );
};

export default PowerSelection;
