import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Avatar from 'Components/avatar';
import Button from 'Components/button';
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
            <Avatar name={character.get('name')} slug={character.get('slug')} />
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
