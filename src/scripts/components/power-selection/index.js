import React from 'react';
import {Link} from 'react-router-dom';

class PowerSelection extends React.Component {
  componentDidMount () {
    console.info('is this only called once?');
    this.props.clearPurchases();
  }

  render () {
    console.info('render');
    return (
      <section>
        <header>
          <h1>Power Selection</h1>
          <nav>
            <Link to="/">Back to character selection</Link>
          </nav>
        </header>
      </section>
    );
  }
};

PowerSelection.propTypes = {
  clearPurchases: React.PropTypes.func.isRequired
};

export default PowerSelection;
