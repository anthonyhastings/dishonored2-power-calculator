import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

const CharacterSelection = (props) => {
  const characterElements = props.characters.valueSeq().map((character) => {
    const characterURL = `/${character.get('id')}/powers`;

    return (
      <div className="character__container" key={character.get('id')}>
        <h2 className="character__name">{character.get('name')}</h2>
        <p className="character__description">{character.get('description')}</p>
        <Link to={characterURL}>Choose {character.get('name')}</Link>
      </div>
    );
  });

  return (
    <section className="characterSelection__container">
      <h1>Character Selection</h1>
      {characterElements}
    </section>
  );
};

CharacterSelection.propTypes = {
  characters: ImmutablePropTypes.map.isRequired
};

export default CharacterSelection;
