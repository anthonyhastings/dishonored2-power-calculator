import classNames from 'classnames';
import corvoPortrait from './images/corvo.jpg';
import emilyPortrait from './images/emily.jpg';
import './stylesheets/avatar.scss';

export interface AvatarProps {
  className?: string;
  name: string;
  slug: CharacterSlugs;
}

const namespace = 'avatar';

export const Avatar = ({ className = '', name, slug }: AvatarProps) => (
  <img
    className={classNames({
      [namespace]: true,
      [className]: Boolean(className),
    })}
    draggable="false"
    src={slug === 'corvo' ? corvoPortrait : emilyPortrait}
    alt={`Portrait of ${name}`}
    loading="lazy"
  />
);
