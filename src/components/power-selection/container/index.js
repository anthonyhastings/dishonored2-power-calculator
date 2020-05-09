import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Component from '../';
import topLevelEnhancementsSelector from 'Reducers/powers/selectors/top-level-enhancements';
import topLevelPowersByCharacterIdSelector from 'Reducers/powers/selectors/top-level-powers-by-character-id';
import {
  clearPurchases,
  addPurchase,
  removePurchases,
  removePurchase
} from 'Reducers/user';

export const mapStateToProps = (state, ownProps) => ({
  topLevelEnhancements: topLevelEnhancementsSelector(state),
  topLevelPowers: topLevelPowersByCharacterIdSelector(
    state,
    ownProps.match.params.characterId
  )
});

export const mapDispatchToProps = (dispatch) => ({
  clearPurchases: bindActionCreators(clearPurchases, dispatch),
  addPurchase: bindActionCreators(addPurchase, dispatch),
  removePurchases: bindActionCreators(removePurchases, dispatch),
  removePurchase: bindActionCreators(removePurchase, dispatch)
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Component)
);
