import React from 'react';
import {render} from '../../../utils/test-util';
import Input from './Input';
import {expect} from '@jest/globals';
import renderer from 'react-test-renderer';

describe('Input', () => {
  it('', () => {
    const wrapper = renderer.create(<Input />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
