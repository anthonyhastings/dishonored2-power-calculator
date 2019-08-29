import { connect } from 'react-redux';
import Component from '../';
import charactersSelector from '../../../reducers/characters/selectors/characters';

const mapStateToProps = (state) => ({
  characters: charactersSelector(state)
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
