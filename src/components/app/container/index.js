import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { getCharacters } from 'Reducers/characters';
import { getPowers } from 'Reducers/powers';
import {
  isInitialDataIncompleteSelector,
  hasInitialDataFailedSelector
} from 'Src/selectors';
import Component from '../';

const mapStateToProps = (state) => ({
  showError: hasInitialDataFailedSelector(state),
  showLoader: isInitialDataIncompleteSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onComponentDidMount() {
    dispatch(getCharacters());
    dispatch(getPowers());
  }
});

export default hot(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
);
