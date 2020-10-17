import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Button from 'Components/button';
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
            <div className={`${characterNamespace}__portrait-wrapper`}>
              <img
                className={`${characterNamespace}__portrait`}
                draggable="false"
                src={characterSlugToPortrait.get(character.get('slug'))}
                alt={`Portrait of ${character.get('name')}`}
              />
            </div>
            <div className={`${characterNamespace}__overlay`}>
              <h2 className={`${characterNamespace}__name`}>
                {character.get('name')}
              </h2>
              <p className={`${characterNamespace}__description`}>
                {character.get('description')}
              </p>
              <Button href={`/powers/${character.get('slug')}`}>
                Choose {character.get('name')}
              </Button>
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
