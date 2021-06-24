import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import corvoPortrait from 'images/portraits/corvo.jpg';
import emilyPortrait from 'images/portraits/emily.jpg';
import './stylesheets/index.scss';

export interface AvatarProps {
  className?: string;
  name: string;
  slug: CharacterSlugs;
}

const namespace = 'avatar';

const Avatar: React.FC<AvatarProps> = ({
  className = '',
  name,
  slug,
}): JSX.Element => (
  <img
    className={classNames({
      [namespace]: true,
      [className]: !isEmpty(className),
    })}
    draggable="false"
    src={slug === 'corvo' ? corvoPortrait : emilyPortrait}
    alt={`Portrait of ${name}`}
    width="771"
    height="901"
    loading="lazy"
  />
);

export default Avatar;
