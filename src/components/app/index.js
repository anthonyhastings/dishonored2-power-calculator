import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Async from 'react-code-splitting';
import 'normalize.css';
import './stylesheets/index.scss';
import Loader from '../loader';
import gameLogo from '../../../images/game-logo.png';

const namespace = 'app';

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
  static propTypes = {
    fetchCharacters: PropTypes.func.isRequired,
    fetchPowers: PropTypes.func.isRequired,
    dataLoaded: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.instanceOf(Error)
    ]).isRequired
  };

  componentDidMount() {
    this.props.fetchCharacters();
    this.props.fetchPowers();
  }

  render() {
    return (
      <div className={namespace}>
        <header>
          <img src={gameLogo} alt="Dishonored 2" />
          <h1>Power Calculator</h1>
        </header>
        <div className={`${namespace}__content`}>
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
}

export default App;
