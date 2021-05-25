import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Component from '../';
import {
  characterBySlugSelector,
  topLevelEnhancementsSelector,
  topLevelPowersByCharacterSlugSelector,
} from 'selectors';

const mapStateToProps = (state, ownProps) => ({
  character: characterBySlugSelector(
    state,
    ownProps.match.params.characterSlug
  ),
  topLevelEnhancements: topLevelEnhancementsSelector(state),
  topLevelPowers: topLevelPowersByCharacterSlugSelector(
    state,
    ownProps.match.params.characterSlug
  ),
});

export default withRouter(connect(mapStateToProps)(Component));
