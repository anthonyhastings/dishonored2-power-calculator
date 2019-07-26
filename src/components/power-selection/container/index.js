import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Component from '../';
import topLevelEnhancementsSelector from '../../../reducers/powers/selectors/top-level-enhancements';
import topLevelPowersByCharacterIdSelector from '../../../reducers/powers/selectors/top-level-powers-by-character-id';
import {
  clearPurchases,
  addPurchase,
  removePurchases,
  removePurchase
} from '../../../reducers/user';

export const mapStateToProps = function(state, ownProps) {
  const characterId = ownProps.match.params.characterId;

  return {
    topLevelEnhancements: topLevelEnhancementsSelector(state),
    topLevelPowers: topLevelPowersByCharacterIdSelector(state, characterId)
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    clearPurchases: bindActionCreators(clearPurchases, dispatch),
    addPurchase: bindActionCreators(addPurchase, dispatch),
    removePurchases: bindActionCreators(removePurchases, dispatch),
    removePurchase: bindActionCreators(removePurchase, dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
);
