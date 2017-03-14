import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Component from '../';
import * as Actions from '../../../flux/actions';
import * as selectors from '../../../flux/selectors';

const mapStateToProps = function (state, ownProps) {
  return {};
};

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
