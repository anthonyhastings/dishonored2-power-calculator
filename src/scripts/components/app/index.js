import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import Async from 'react-code-splitting';
import Loader from '../loader';
import gameLogo from '../../../images/game-logo.png';

const CharacterSelection = (props) => (
  <Async
    componentProps={props}
    load={import(
      /* webpackChunkName: "character-selection" */
      '../character-selection/container'
    )}
  />
);

const PowerSelection = (props) => (
  <Async
    componentProps={props}
    load={import(
      /* webpackChunkName: "power-selection" */
      '../power-selection/container'
    )}
  />
);

class App extends React.Component {
  componentDidMount () {
    this.props.fetchCharacters();
    this.props.fetchPowers();
  }

  render () {
    return (
      <div>
        <h1>App</h1>
        <header>
          <h1>Dishonored 2: Power Calculator</h1>
          <img src={gameLogo} alt='Dishonored 2' />
        </header>
        <Loader loaded={this.props.dataLoaded}>
          <Switch>
            <Route exact path="/" component={CharacterSelection} />
            <Route path="/:characterId/powers" component={PowerSelection} />
          </Switch>
        </Loader>
      </div>
    );
  }
};

App.propTypes = {
  fetchCharacters: PropTypes.func.isRequired,
  fetchPowers: PropTypes.func.isRequired,
  dataLoaded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.instanceOf(Error)
  ]).isRequired
};

export default App;
