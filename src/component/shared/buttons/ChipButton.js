import React from 'react';
import styled from '@emotion/native';
import {COLOR_SECONDARY} from '../../../constants/styles';
import {TextXs} from '../text/Text';

function ChipButton({icon, title, textColor, bgColor, ...props}) {
  return (
    <ButtonWrap bgColor={bgColor} {...props}>
      {icon}
      <TextXs color={textColor}>{title}</TextXs>
    </ButtonWrap>
  );
}

const ButtonWrap = styled.TouchableOpacity`
  height: 32px;
  border-radius: 16px;
  background-color: ${props => props.bgColor || COLOR_SECONDARY};
  align-items: center;
  justify-content: center;
  padding-horizontal: 15px;
  flex-direction: row;
`;

export default ChipButton;
