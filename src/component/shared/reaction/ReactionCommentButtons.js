import React from 'react';
import {TextSm} from '../text/Text';
import {
  COLOR_DARK,
  COLOR_SECONDARY,
  COLOR_TEXT_SECONDARY,
} from '../../../constants/styles';
import styled from '@emotion/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ReactionCommentButtons = ({
  onToggleReaction,
  isToggled,
  toggledType,
  reactionCount,
}) => {
  return (
    <Holder>
      <ButtonHolder>
        <TextSm>{'Like'}</TextSm>
        <SpacedContent onPress={onToggleReaction}>
          <MaterialIcons
            name={isToggled ? 'thumb-up' : 'thumb-up-off-alt'}
            size={20}
            color={isToggled ? COLOR_SECONDARY : COLOR_TEXT_SECONDARY}
          />
        </SpacedContent>
        <TextSm>{reactionCount}</TextSm>
      </ButtonHolder>
      <HorizontalBorder />
    </Holder>
  );
};

export default ReactionCommentButtons;

const Holder = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ButtonHolder = styled.View`
  align-items: center;
  flex-direction: row;
`;

const SpacedContent = styled.TouchableOpacity`
  margin-right: 10px;
  margin-left: 10px;
`;

const HorizontalBorder = styled.View`
  height: 32px;
  width: 2px;
  background-color: ${COLOR_DARK};
  margin-right: 20px;
  margin-left: 20px;
`;
