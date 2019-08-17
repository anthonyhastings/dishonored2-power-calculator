import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './stylesheets/index.scss';
import Loader from '../loader';
import gameLogo from '../../../images/game-logo.png';

const namespace = 'app';

const CharacterSelection = lazy(() =>
  import(
    /* webpackChunkName: "character-selection" */
    '../character-selection/container'
  )
);

const PowerSelection = lazy(() =>
  import(
    /* webpackChunkName: "power-selection" */
    '../power-selection/container'
  )
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
            <Suspense fallback={<Loader loadingState={false} />}>
              <Switch>
                <Route exact path="/" component={CharacterSelection} />
                <Route path="/:characterId/powers" component={PowerSelection} />
              </Switch>
            </Suspense>
          </Loader>
        </div>
      </div>
    );
  }
}

export default App;
