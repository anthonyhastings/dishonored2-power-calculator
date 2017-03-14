import React from 'react';
import {Link} from 'react-router-dom';

const PowerSelection = (props) => {
  console.info('PowerSelection:', props);

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
};

PowerSelection.propTypes = {};

export default PowerSelection;
