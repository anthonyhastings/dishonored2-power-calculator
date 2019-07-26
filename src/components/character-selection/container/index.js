import { connect } from 'react-redux';
import Component from '../';
import charactersSelector from '../../../reducers/characters/selectors/characters';

const mapStateToProps = function(state) {
  return {
    characters: charactersSelector(state)
  };
};

const mapDispatchToProps = function() {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
