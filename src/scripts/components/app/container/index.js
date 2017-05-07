import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCharacters} from '../../../reducers/characters';
import {fetchPowers} from '../../../reducers/powers';
import Component from '../';

const mapStateToProps = function () {
  return {
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchCharacters: bindActionCreators(fetchCharacters, dispatch),
    fetchPowers: bindActionCreators(fetchPowers, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
