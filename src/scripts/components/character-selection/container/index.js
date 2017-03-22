import {connect} from 'react-redux';
import Component from '../';
import * as selectors from '../../../flux/selectors';

const mapStateToProps = function (state) {
  return {
    characters: selectors.charactersSelector(state)
  };
};

const mapDispatchToProps = function () {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
