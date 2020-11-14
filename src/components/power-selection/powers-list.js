import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import kebabCase from 'lodash/kebabCase';
import './stylesheets/powers-list.scss';

const namespace = 'powers-list';

const PowersList = ({ children, className, powers }) => {
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
            <div className={`${namespace}__grid-item`} key={power.get('id')}>
              <h1>{power.get('name')}</h1>
              <span
                alt={`Symbol for ${power.get('name')}`}
                className={`${namespace}__icon ${namespace}__icon--${kebabCase(
                  power.get('name')
                )}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

PowersList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  powers: ImmutablePropTypes.list.isRequired,
};

export default PowersList;
