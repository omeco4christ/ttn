import React from 'react';
import LoginScreen from './LoginScreen';
import renderer from 'react-test-renderer';
import Login from '../../component/Login/Login';

describe('LoginScreen', () => {
  it('Login Screen renders correctly', () => {
    const loginWrapper = renderer.create(<LoginScreen />);
  });
});
