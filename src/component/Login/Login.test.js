import React from 'react';
import renderer from 'react-test-renderer';
import Login from './Login';
describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderer.create(<Login />);
  });
  it('renders login component correctly', () => {
    let wrapper = renderer.create(<Login />);
    wrapper.findByProps({testID: 'welcome'});
  });
});
