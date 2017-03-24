import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Component from '../';
import * as Actions from '../../../flux/actions';
import * as selectors from '../../../flux/selectors';

export const mapStateToProps = function (state, ownProps) {
  const characterId = ownProps.match.params.characterId;

  return {
    topLevelEnhancements: selectors.topLevelEnhancementsSelector(state),
    topLevelPowers: selectors.topLevelPowersByCharacterIdSelector(state, characterId)
  };
};

export const mapDispatchToProps = function (dispatch) {
  return {
    clearPurchases: bindActionCreators(Actions.clearPurchases, dispatch),
    addPurchase: bindActionCreators(Actions.addPurchase, dispatch),
    removePurchases: bindActionCreators(Actions.removePurchases, dispatch),
    removePurchase: bindActionCreators(Actions.removePurchase, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
