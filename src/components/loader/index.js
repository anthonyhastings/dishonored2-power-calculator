import PropTypes from 'prop-types';
import './stylesheets/index.scss';
import OutsidersMark from 'components/outsiders-mark';

const namespace = 'app-loader';

const Loader = ({ children, showError = false, showLoader = false }) => {
  if (!showError && !showLoader) return children;

  return (
    <div className={namespace}>
      <h2 className={`${namespace}__message`}>
        {showError ? 'Error while loading' : 'Loading'}
      </h2>
      <OutsidersMark animated={showLoader} className={`${namespace}__icon`} />
    </div>
  );
};

Loader.propTypes = {
  children: PropTypes.element,
  showError: PropTypes.bool,
  showLoader: PropTypes.bool,
};

export default Loader;
