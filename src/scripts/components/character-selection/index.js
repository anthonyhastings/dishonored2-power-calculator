import React from 'react';
import {Link} from 'react-router-dom';

const CharacterSelection = (props) => {
  const characterElements = props.characters.map((character) => {
    const characterURL = `/${character.id}/powers`;

    return (
      <div className="character__container" key={character.id}>
        <h2 className="character__name">{character.name}</h2>
        <p className="character__description">{character.description}</p>
        <Link to={characterURL}>Choose {character.name}</Link>
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
  characters: React.PropTypes.array.isRequired
};

export default CharacterSelection;
