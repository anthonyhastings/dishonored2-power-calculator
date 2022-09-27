import classNames from 'classnames';
import './stylesheets/outsiders-mark.scss';

export interface OutsidersMarkProps {
  animated?: boolean;
  className?: string;
}

const namespace = 'outsiders-mark';

export const OutsidersMark: React.FC<OutsidersMarkProps> = ({
  animated = false,
  className = '',
}): JSX.Element => {
  const classes = classNames({
    [namespace]: true,
    [`${namespace}--is-animating`]: animated,
    [className]: Boolean(className),
  });

  return <div aria-hidden="true" className={classes} />;
};
