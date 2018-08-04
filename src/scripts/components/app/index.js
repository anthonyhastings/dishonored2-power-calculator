import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import Async from 'react-code-splitting';
import 'normalize.css';
import './stylesheets/index.scss';
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
      <div className={App.namespace}>
        <header>
          <img src={gameLogo} alt='Dishonored 2' />
          <h1>Power Calculator</h1>
        </header>
        <div className={`${App.namespace}__content`}>
          <Loader loadingState={this.props.dataLoaded}>
            <Switch>
              <Route exact path="/" component={CharacterSelection} />
              <Route path="/:characterId/powers" component={PowerSelection} />
            </Switch>
          </Loader>
        </div>
      </div>
    );
  }
};

App.namespace = 'app';
App.propTypes = {
  fetchCharacters: PropTypes.func.isRequired,
  fetchPowers: PropTypes.func.isRequired,
  dataLoaded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.instanceOf(Error)
  ]).isRequired
};

export default App;
