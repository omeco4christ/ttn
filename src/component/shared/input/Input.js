import React from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import {
  COLOR_INPUT,
  COLOR_SECONDARY,
  COLOR_WHITE,
} from '../../../constants/styles';
import {TextXs} from '../text/Text';
import {CSS_INPUT} from '../../../styles/styles';

const Input = props => {
  const {error, ...others} = props;
  return (
    <View>
      <InputWrapper
        placeholderTextColor={COLOR_WHITE}
        error={error}
        {...others}
      />
      <TextXs color={COLOR_SECONDARY}>{error}</TextXs>
    </View>
  );
};

const InputWrapper = styled.TextInput`
  height: ${props => (props.multiline ? 'auto' : '44px')};
  border-radius: 22px;
  border-color: ${props => (props.error ? COLOR_SECONDARY : COLOR_INPUT)};
  text-align-vertical: top;
  ${CSS_INPUT};
`;
export default Input;
