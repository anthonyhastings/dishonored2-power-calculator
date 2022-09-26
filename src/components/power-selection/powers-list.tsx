import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import kebabCase from 'lodash/kebabCase';
import './stylesheets/powers-list.scss';

export interface PowersListProps {
  children: React.ReactNode;
  className?: string;
  powers: Power[];
}

const namespace = 'powers-list';

export const PowersList: React.FC<PowersListProps> = ({
  children,
  className = '',
  powers,
}): JSX.Element => {
  const classes = classNames({
    [namespace]: true,
    [className]: !isEmpty(className),
  });

  return (
    <section className={classes}>
      <h1 className={`${namespace}__title`}>{children}</h1>
      <div className={`${namespace}__grid`}>
        {powers.map((power) => {
          return (
            <div className={`${namespace}__grid-item`} key={power.id}>
              <h1>{power.name}</h1>
              <span
                aria-label={`Symbol for ${power.name}`}
                className={`${namespace}__icon ${namespace}__icon--${kebabCase(
                  power.name
                )}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
