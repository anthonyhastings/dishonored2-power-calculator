import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import App from '../components/app';
import * as Actions from '../flux/actions';
import * as selectors from '../selectors';

const mapStateToProps = function (state) {
  return {
    character: selectors.characterSelector(state),
    totalRunes: selectors.totalRunesSelector(state),
    spentRunes: selectors.spentRunesSelector(state),
    remainingRunes: selectors.remainingRunesSelector(state),
    topLevelPowers: selectors.topLevelPowersByCharacterSelector(state),
    topLevelEnhancements: selectors.topLevelEnhancementsByCharacterSelector(state)
  };
};

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(Actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
