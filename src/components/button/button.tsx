import classNames from 'classnames';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import './stylesheets/button.scss';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const namespace = 'button';

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  href,
}): JSX.Element => {
  const classes = classNames({
    [namespace]: true,
    [className]: !isEmpty(className),
  });

  return (
    <Link className={classes} to={href}>
      {children}
    </Link>
  );
};

export default Button;
