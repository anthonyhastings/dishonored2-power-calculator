import { connect } from 'react-redux';
import { charactersDataSelector } from 'selectors';
import Component from '../';

const mapStateToProps = (state) => ({
  characters: charactersDataSelector(state),
});

export default connect(mapStateToProps)(Component);
