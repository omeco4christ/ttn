import React from 'react';
import styled from '@emotion/native';
import {COLOR_DIVIDER} from '../../../constants/styles';

const Divider = () => {
  return <Holder/>;
};

export default Divider;

const Holder = styled.View`
  height: 1px;
  background-color: ${COLOR_DIVIDER};
  margin-vertical: 10px;
`;
