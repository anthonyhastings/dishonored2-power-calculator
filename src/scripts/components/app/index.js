import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CharacterSelection from '../character-selection/container';
import PowerSelection from '../power-selection/container';

const App = (props) => {
  console.info('App:', props);

  return (
    <div>
      <h1>App</h1>
      <header>
        <h1>Dishonored 2: Power Calculator</h1>
      </header>
      <Switch>
        <Route exact path="/" component={CharacterSelection} />
        <Route path="/:characterId/powers" component={PowerSelection} />
      </Switch>
    </div>
  );
};

App.propTypes = {};

export default App;
