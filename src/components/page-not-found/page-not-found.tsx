import './stylesheets/page-not-found.scss';
import OutsidersMark from '@/components/outsiders-mark';

const namespace = 'page-not-found';

const PageNotFound = (): JSX.Element => (
  <div className={namespace}>
    <h1 className={`${namespace}__message`}>Page Not Found</h1>
    <OutsidersMark animated={false} className={`${namespace}__icon`} />
  </div>
);

export default PageNotFound;
