import { connect } from 'react-redux';
import { fetchCharacters } from 'slices/characters';
import { fetchPowers } from 'slices/powers';
import {
  isInitialDataIncompleteSelector,
  hasInitialDataFailedSelector,
} from 'selectors';
import Component from '../';

const mapStateToProps = (state) => ({
  showError: hasInitialDataFailedSelector(state),
  showLoader: isInitialDataIncompleteSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onComponentDidMount() {
    dispatch(fetchCharacters());
    dispatch(fetchPowers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
