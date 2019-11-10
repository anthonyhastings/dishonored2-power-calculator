import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { characterBySlugSelector } from 'Src/selectors';
import Component from '../route-validation';

export const mapStateToProps = (state, ownProps) => {
  const characterSlug = ownProps.match.params.characterSlug;

  return {
    character: characterBySlugSelector(state, characterSlug)
  };
};

export default withRouter(connect(mapStateToProps)(Component));
