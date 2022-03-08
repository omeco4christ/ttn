import React from 'react';
import {render} from '../../../utils/test-util';
import {expect} from '@jest/globals';
import {TextExLg, TextLg, TextMd, TextSm} from './Text';
import renderer from 'react-test-renderer';

describe('Text Components', () => {
  it('Extra Large Text renders correctly', () => {
    const wrapper = renderer.create(<TextExLg />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('Large Text renders correctly', () => {
    const wraper = renderer.create(<TextLg />).toJSON();
    expect(wraper).toMatchSnapshot();
  });
  it('Medium Text renders correctly', () => {
    const wrapper = renderer.create(<TextMd />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('Small Text renders correctly', () => {
    const wrapper = renderer.create(<TextSm />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
