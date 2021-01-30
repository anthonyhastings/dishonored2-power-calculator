import PropTypes from 'prop-types';
import values from 'lodash/values';
import Avatar from 'Components/avatar';
import Button from 'Components/button';
import './stylesheets/index.scss';

const characterNamespace = 'character';

const CharacterSelection = ({ characters }) => (
  <section className="character-selection">
    <h1 className="character-selection__title">Choose your character</h1>
    <div className="character-selection__grid">
      {values(characters).map((character) => (
        <div
          className={`character-selection__grid-element ${characterNamespace}`}
          key={character.id}
        >
          <Avatar name={character.name} slug={character.slug} />
          <div className={`${characterNamespace}__overlay`}>
            <h2 className={`${characterNamespace}__name`}>{character.name}</h2>
            <p className={`${characterNamespace}__description`}>
              {character.description}
            </p>
            <Button href={`/powers/${character.slug}`}>
              Choose {character.name}
            </Button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

CharacterSelection.propTypes = {
  characters: PropTypes.objectOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default CharacterSelection;
