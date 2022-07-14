import { render, screen } from '@testing-library/react';
import Avatar, { type AvatarProps } from '../avatar';

describe('Avatar component', () => {
  let testContext: { defaultProps: AvatarProps };

  const renderComponent = (props = {}) =>
    render(<Avatar {...testContext.defaultProps} {...props} />);

  beforeEach(() => {
    testContext = {
      defaultProps: {
        name: 'Fake Name',
        slug: 'corvo',
      },
    };
  });

  describe('when name/slug is corvo', () => {
    beforeEach(() => {
      renderComponent({ name: 'Corvo', slug: 'corvo' });
    });

    it('renders an image specific to Corvo', () => {
      expect(screen.getByAltText('Portrait of Corvo')).toBeVisible();
    });
  });

  describe('when name/slug is emily', () => {
    beforeEach(() => {
      renderComponent({ name: 'Emily', slug: 'emily' });
    });

    it('renders an image specific to Emily', () => {
      expect(screen.getByAltText('Portrait of Emily')).toBeVisible();
    });
  });

  describe('when className is provided', () => {
    it('renders with extra className', () => {
      const { container } = renderComponent({ className: 'mock-class' });
      expect(container.querySelectorAll('.mock-class').length).toEqual(1);
    });
  });
});
