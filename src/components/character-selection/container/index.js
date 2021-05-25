import { connect } from 'react-redux';
import Component from '../';
import { charactersDataSelector } from 'selectors';

const mapStateToProps = (state) => ({
  characters: charactersDataSelector(state),
});

export default connect(mapStateToProps)(Component);
