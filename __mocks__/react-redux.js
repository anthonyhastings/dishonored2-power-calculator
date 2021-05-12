const mockDispatch = jest.fn((action) => action);

/* eslint-disable jest/require-top-level-describe */
afterEach(() => {
  mockDispatch.mockClear();
});
/* eslint-enable jest/require-top-level-describe */

export const connect =
  (mapStateToProps, mapDispatchToProps) => (Component) => ({
    mapStateToProps,
    mapDispatchToProps: (dispatch = mockDispatch, ownProps) =>
      mapDispatchToProps(dispatch, ownProps),
    Component,
    mockDispatch,
  });

export const Provider = ({ children }) => children;
