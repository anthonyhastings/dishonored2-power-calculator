import React from 'react';

class App extends React.Component {
  constructor () {
    super();

    this.chooseEmily = this.onCharacterClick.bind(this, 'emily');
    this.chooseCorvo = this.onCharacterClick.bind(this, 'corvo');
  }

  onCharacterClick (chosenCharacter) {
    const {setCharacter} = this.props;

    setCharacter(chosenCharacter);
  }

  render () {
    return (
      <div className="hello-world">
        <h1>Hello World</h1>
        <button data-character="emily" onClick={this.chooseEmily}>Choose Emily</button>
        <button data-character="corvo" onClick={this.chooseCorvo}>Choose Corvo</button>
        <button onClick={this.props.removePurchase.bind(this, '0dc9ca43-a526-4536-b202-0215e8579807')}>DUMMY REMOVE BUTTON TO TEST THUNK</button>
      </div>
    );
  }
};

App.propTypes = {
  setCharacter: React.PropTypes.func.isRequired,
  removePurchase: React.PropTypes.func.isRequired
};

export default App;
