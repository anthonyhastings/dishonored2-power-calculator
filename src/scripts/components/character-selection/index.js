import React from 'react';

const CharacterSelection = (props) => {
  const characterElements = props.characters.map((character) => {
    return (
      <div className="character__container" key="{character.id}">
        <h2>{character.name}</h2>
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
