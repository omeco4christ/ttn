import React from 'react';
import styled from '@emotion/native';
import {
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_WHITE,
} from '../../../constants/styles';
import Icon from 'react-native-vector-icons/Feather';

const Input = props => {
  return (
    <Holder>
      <Icon name={'search'} color={COLOR_WHITE} size={18} />
      <InputWrapper placeholderTextColor={COLOR_TEXT_SECONDARY} {...props} />
    </Holder>
  );
};

const Holder = styled.View`
  height: 40px;
  flex-direction: row;
  flex: 1;
  background-color: rgba(142, 142, 147, 0.12);
  border-radius: 20px;
  padding-horizontal: 10px;
  align-items: center;
`;

const InputWrapper = styled.TextInput`
  height: 36px;
  color: ${COLOR_TEXT_PRIMARY};
  flex: 1;
  margin-left: 10px;
`;

export default Input;
