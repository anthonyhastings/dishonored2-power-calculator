import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { hot } from 'react-hot-loader/root';
import { fetchCharacters } from '../../../reducers/characters';
import { fetchPowers } from '../../../reducers/powers';
import dataLoadedSelector from '../../../reducers/selectors/data-loaded';
import Component from '../';

const mapStateToProps = function(state) {
  return {
    dataLoaded: dataLoadedSelector(state)
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchCharacters: bindActionCreators(fetchCharacters, dispatch),
    fetchPowers: bindActionCreators(fetchPowers, dispatch)
  };
};

const connectedComponent = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
);

export default hot(connectedComponent);
