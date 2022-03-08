import React from 'react';
import styled from '@emotion/native';
import {
  COLOR_LIGHT,
  COLOR_TEXT_SECONDARY,
  FONT_WEIGHT_NORMAL,
} from '../../constants/styles';
import {TextNorm} from '../shared/text/Text';
import QuestionTips from './QuestionTips';
import AvatarUsernameTime from '../shared/user/AvatarUsernameTime';

const SpaceQuestionForm = () => {
  return (
    <Holder>
      <TipSection>
        <TextNorm weight={FONT_WEIGHT_NORMAL}>
          Tips on getting good answer quickly
        </TextNorm>
        <QuestionTips />
      </TipSection>
      <BodySection>
        <AvatarUsernameTime name={'Christiana Kennedy'} />
        <QuestionInput
          placeholder={'Start your question with ‘What’, ‘How’, ‘Why’, etc'}
          placeholderTextColor={COLOR_TEXT_SECONDARY}
        />
      </BodySection>
    </Holder>
  );
};

export default SpaceQuestionForm;

const Holder = styled.View``;

const TipSection = styled.View`
  padding: 30px;
  background-color: ${COLOR_LIGHT};
  margin-top: 20px;
`;

const BodySection = styled.View`
  margin-top: 20px;
`;

const QuestionInput = styled.TextInput`
  font-size: 22px;
  border-bottom-width: 1px;
  margin-top: 30px;
`;
