import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './stylesheets/index.scss';

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
}

PowerSelection.propTypes = {
  clearPurchases: PropTypes.func.isRequired
};

export default PowerSelection;
