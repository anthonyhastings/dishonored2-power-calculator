import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';
import './stylesheets/index.scss';

export interface OutsidersMarkProps {
  animated?: boolean;
  className?: string;
}

const namespace = 'outsiders-mark';

const OutsidersMark: React.FC<OutsidersMarkProps> = ({
  animated = false,
  className = '',
}): JSX.Element => {
  const classes = classNames({
    [namespace]: true,
    [`${namespace}--is-animating`]: animated,
    [className]: !isEmpty(className),
  });

  return <div aria-hidden="true" className={classes} />;
};

export default OutsidersMark;
