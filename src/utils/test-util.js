import React from 'react';
import renderer from 'react-test-renderer';

const AllTheProviders = ({children}) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const customRender = (ui, options) =>
  renderer(ui, {wrapper: AllTheProviders, ...options});

export {customRender as renderer};
