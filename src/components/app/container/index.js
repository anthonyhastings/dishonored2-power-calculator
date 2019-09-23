import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { hot } from 'react-hot-loader/root';
import { getCharacters } from 'Reducers/characters';
import { getPowers } from 'Reducers/powers';
import { isInitialDataLoadingSelector } from 'Src/selectors';
import Component from '../';

const mapStateToProps = (state) => ({
  showLoader: isInitialDataLoadingSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onComponentDidMount() {
    dispatch(getCharacters());
    dispatch(getPowers());
  }
});

const connectedComponent = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
);

export default hot(connectedComponent);
