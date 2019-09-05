import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './stylesheets/index.scss';
import Loader from 'Components/loader';
import logo660 from 'Images/logo/660x90.png';
import logo1320 from 'Images/logo/1320x180.png';

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

const PageNotFound = lazy(() =>
  import(
    /* webpackChunkName: "page-not-found" */
    '../page-not-found'
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
        <header className={`${namespace}__header`}>
          <h1 className={`${namespace}__title`}>Power Calculator</h1>
          <img
            alt="Dishonored 2 logo"
            className={`${namespace}__logo`}
            sizes="100vw"
            srcSet={`${logo660} 660w, ${logo1320} 1320w`}
          />
        </header>
        <div className={`${namespace}__content`}>
          <Loader loadingState={this.props.dataLoaded}>
            <Suspense fallback={<Loader loadingState={false} />}>
              <Switch>
                <Route exact path="/" component={CharacterSelection} />
                <Route path="/:characterId/powers" component={PowerSelection} />
                <Route component={PageNotFound} />
              </Switch>
            </Suspense>
          </Loader>
        </div>
      </div>
    );
  }
}

export default App;
