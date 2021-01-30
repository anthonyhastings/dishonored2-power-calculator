import renderer from 'react-test-renderer';
import PowerSelection from '../';

jest.mock('Components/avatar', () => 'MockAvatar');

jest.mock('Components/button', () => 'MockButton');

jest.mock('../powers-list', () => 'MockPowersList');

describe('PowerSelection component', () => {
  let testContext;

  const renderComponent = (props = {}) => (
    <PowerSelection {...testContext.defaultProps} {...props} />
  );

  beforeEach(() => {
    testContext = {};

    testContext.defaultProps = {
      character: { name: 'Mock Name', slug: 'mock-slug' },
      topLevelEnhancements: ['mock-top-level-enhancements'],
      topLevelPowers: ['mock-top-level-powers'],
    };
  });

  describe('when rendered', () => {
    beforeEach(() => {
      testContext.component = renderer.create(renderComponent());
    });

    it('renders a header area and categories for powers and enhancements', () => {
      expect(testContext.component).toMatchSnapshot();
    });
  });
});
