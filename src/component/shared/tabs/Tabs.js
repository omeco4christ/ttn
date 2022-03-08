import React from 'react';
import styled from '@emotion/native';
import {CSS_STYLE_SHADOW_HOLDER} from '../../../styles/styles';
import {COLOR_DARK} from '../../../constants/styles';

const Tabs = ({children}) => {
  return <Holder style={CSS_STYLE_SHADOW_HOLDER}>{children}</Holder>;
};

export default Tabs;

const Holder = styled.View`
  background-color: ${COLOR_DARK};
  flex-direction: row;
`;
