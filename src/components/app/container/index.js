import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { hot } from 'react-hot-loader/root';
import { fetchCharacters } from 'Reducers/characters';
import { fetchPowers } from 'Reducers/powers';
import dataLoadedSelector from 'Reducers/selectors/data-loaded';
import Component from '../';

const mapStateToProps = (state) => ({
  dataLoaded: dataLoadedSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: bindActionCreators(fetchCharacters, dispatch),
  fetchPowers: bindActionCreators(fetchPowers, dispatch)
});

const connectedComponent = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
);

export default hot(connectedComponent);
