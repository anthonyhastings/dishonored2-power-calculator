import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './stylesheets/index.scss';

class PowerSelection extends React.Component {
  componentDidMount() {
    this.props.clearPurchases();
  }

  render() {
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
