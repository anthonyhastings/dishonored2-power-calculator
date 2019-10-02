const mockDispatch = jest.fn((action) => action);

afterEach(() => {
  mockDispatch.mockClear();
});

export const connect = (mapStateToProps, mapDispatchToProps) => (
  Component
) => ({
  mapStateToProps,
  mapDispatchToProps: (dispatch = mockDispatch, ownProps) =>
    mapDispatchToProps(dispatch, ownProps),
  Component,
  mockDispatch
});

export const Provider = ({ children }) => children;
