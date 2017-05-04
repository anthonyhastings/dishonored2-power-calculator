import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCharacters} from '../../../reducers/characters';
import Component from '../';

const mapStateToProps = function () {
  return {
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchCharacters: bindActionCreators(fetchCharacters, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
