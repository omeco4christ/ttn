import React from 'react';
import styled from '@emotion/native';
import {
  COLOR_SECONDARY,
  FONT_WEIGHT_SEMI_BLACK,
} from '../../../constants/styles';
import {TextSm} from '../text/Text';

function Button({title, loading, onPress, disabled, ...props}) {
  const handlePress = () => {
    if (loading || disabled) return;
    onPress();
  };
  return (
    <ButtonWrap {...props} onPress={handlePress}>
      <TextSm weight={FONT_WEIGHT_SEMI_BLACK}>{title}</TextSm>
      {(loading || disabled) && <DisabledIndicator />}
    </ButtonWrap>
  );
}

const ButtonWrap = styled.TouchableOpacity`
  height: 44px;
  border-radius: 22px;
  background-color: ${COLOR_SECONDARY};
  opacity: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
`;

const DisabledIndicator = styled.View`
  height: 44px;
  border-radius: 22px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  left: 0;
  right: 0;
`;

export default Button;
