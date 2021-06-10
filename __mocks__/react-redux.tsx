import React from 'react';

const mockDispatch = jest.fn((action) => action);

// eslint-disable-next-line jest/require-top-level-describe
afterEach(() => {
  mockDispatch.mockClear();
});

type MapDispatchToProps = (
  dispatch: jest.Mock,
  ownProps: Record<string, any>
) => void;

interface MockConnect {
  mapStateToProps: () => void;
  mapDispatchToProps: MapDispatchToProps;
  Component: React.FC;
  mockDispatch: jest.Mock;
}

type ConnectWrapper = (
  mapStateToProps: () => void,
  mapDispatchToProps: MapDispatchToProps
) => (Component: React.FC) => MockConnect;

export const connect: ConnectWrapper =
  (mapStateToProps, mapDispatchToProps) => (Component) => ({
    mapStateToProps,
    mapDispatchToProps: (dispatch = mockDispatch, ownProps) =>
      mapDispatchToProps(dispatch, ownProps),
    Component,
    mockDispatch,
  });

export const Provider: React.FC = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);
