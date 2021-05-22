import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import characterSlugToPortrait from 'Constants/character-slug-to-portrait';
import './stylesheets/index.scss';

const namespace = 'avatar';

const Avatar = ({ className, name, slug }) => (
  <img
    className={classNames({
      [namespace]: true,
      [className]: !isEmpty(className),
    })}
    draggable="false"
    src={characterSlugToPortrait.get(slug)}
    alt={`Portrait of ${name}`}
  />
);

Avatar.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  slug: PropTypes.oneOf(Array.from(characterSlugToPortrait.keys())).isRequired,
};

export default Avatar;
