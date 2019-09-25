import { connect } from 'react-redux';
import Component from '../';
import { charactersDataSelector } from 'Src/selectors';

const mapStateToProps = (state) => ({
  characters: charactersDataSelector(state)
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
