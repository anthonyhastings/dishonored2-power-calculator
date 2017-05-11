import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCharacters} from '../../../reducers/characters';
import {fetchPowers} from '../../../reducers/powers';
import dataLoadedSelector from '../../../reducers/selectors/data-loaded';
import Component from '../';

const mapStateToProps = function (state) {
  return {
    dataLoaded: dataLoadedSelector(state)
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchCharacters: bindActionCreators(fetchCharacters, dispatch),
    fetchPowers: bindActionCreators(fetchPowers, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
