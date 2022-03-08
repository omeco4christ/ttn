import React from 'react';
import styled from '@emotion/native';
import {TextSm} from '../text/Text';

function GhostButton({title, color, ...props}) {
  return (
    <ButtonWrap {...props}>
      <TextSm color={color}>{title}</TextSm>
    </ButtonWrap>
  );
}

const ButtonWrap = styled.TouchableOpacity`
  height: 44px;
  border-radius: 22px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

export default GhostButton;
