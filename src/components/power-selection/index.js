import ImmutablePropTypes from 'react-immutable-proptypes';
import Avatar from 'Components/avatar';
import Button from 'Components/button';
import './stylesheets/index.scss';
import PowersList from './powers-list';

const namespace = 'power-selection';

const PowerSelection = ({
  character,
  topLevelEnhancements,
  topLevelPowers,
}) => {
  return (
    <section className={namespace}>
      <header className={`${namespace}__header`}>
        <h1 className={`${namespace}__title`}>
          {character.get('name')}
          <br />
          Select your powers
        </h1>
        <Avatar
          className={`${namespace}__avatar`}
          name={character.get('name')}
          slug={character.get('slug')}
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

PowerSelection.propTypes = {
  character: ImmutablePropTypes.map.isRequired,
  topLevelEnhancements: ImmutablePropTypes.list.isRequired,
  topLevelPowers: ImmutablePropTypes.list.isRequired,
};

export default PowerSelection;
