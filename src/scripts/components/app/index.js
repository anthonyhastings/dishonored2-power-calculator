import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import CharacterSelection from '../character-selection/container';
import PowerSelection from '../power-selection/container';
import Loader from '../loader';

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
