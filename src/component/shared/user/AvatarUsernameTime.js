import React from 'react';
import styled from '@emotion/native';
import {TextNorm, TextSm} from '../text/Text';
import {
  COLOR_TEXT_SECONDARY,
  FONT_WEIGHT_BOLD,
  MAIN_HORIZONTAL_SPACING,
} from '../../../constants/styles';
import Avatar from '../avatar/Avatar';

const AvatarUsernameTime = ({name, time}) => {
  return (
    <Holder>
      <Avatar />
      <TextSection>
        <TextNorm weight={FONT_WEIGHT_BOLD}>{name}</TextNorm>
        {time ? <TextSm color={COLOR_TEXT_SECONDARY}>{time}</TextSm> : null}
      </TextSection>
    </Holder>
  );
};

export default AvatarUsernameTime;

const Holder = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextSection = styled.View`
  margin-left: ${MAIN_HORIZONTAL_SPACING};
`;
