import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';
import characterSlugToPortrait from 'Constants/character-slug-to-portrait';
import './stylesheets/index.scss';

const characterNamespace = 'character';

const CharacterSelection = ({ characters }) => {
  return (
    <section className="character-selection">
      <h1 className="character-selection__title">Choose your character</h1>
      <div className="character-selection__grid">
        {characters.valueSeq().map((character) => (
          <div
            className={`character-selection__grid-element ${characterNamespace}`}
            key={character.get('id')}
          >
            <img
              className={`${characterNamespace}__portrait`}
              draggable="false"
              src={characterSlugToPortrait.get(character.get('slug'))}
              alt={`Portrait of ${character.get('name')}`}
            />
            <div className={`${characterNamespace}__overlay`}>
              <h2 className={`${characterNamespace}__name`}>
                {character.get('name')}
              </h2>
              <p className={`${characterNamespace}__description`}>
                {character.get('description')}
              </p>
              <Link
                className={`${characterNamespace}__button`}
                to={`/powers/${character.get('slug')}`}
              >
                Choose {character.get('name')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

CharacterSelection.propTypes = {
  characters: ImmutablePropTypes.map.isRequired,
};

export default CharacterSelection;
