import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import App from '../components/app';
import * as Actions from '../flux/actions';
import * as selectors from '../flux/selectors';

const mapStateToProps = function (state) {

  console.info('Devouring Swarm:', selectors.powerTreeSelector(state, '5211fb67-a109-4fe0-9acc-dd0963f398ea'));
  console.info('Posession:', selectors.powerTreeSelector(state, 'e2b274c4-d727-44a7-a4ef-32da487bb4b6'));
  console.info('Shadow Kill:', selectors.powerTreeSelector(state, 'fb909e60-c319-4133-9716-bc4a15c645a7'));

  return {
    characters: selectors.charactersSelector(state),
    totalRunes: selectors.totalRunesSelector(state),
    spentRunes: selectors.spentRunesSelector(state),
    remainingRunes: selectors.remainingRunesSelector(state)
  };
};

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
