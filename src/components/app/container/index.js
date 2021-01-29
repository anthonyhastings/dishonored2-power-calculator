import { connect } from 'react-redux';
import { fetchCharacters } from 'Slices/characters';
import { fetchPowers } from 'Slices/powers';
import {
  isInitialDataIncompleteSelector,
  hasInitialDataFailedSelector,
} from 'Src/selectors';
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
