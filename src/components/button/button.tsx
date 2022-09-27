import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './stylesheets/button.scss';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const namespace = 'button';

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  href,
}): JSX.Element => {
  const classes = classNames({
    [namespace]: true,
    [className]: Boolean(className),
  });

  return (
    <Link className={classes} to={href}>
      {children}
    </Link>
  );
};
