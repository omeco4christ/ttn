import React from 'react';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {TextSm} from '../text/Text';
import {
  COLOR_SECONDARY,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
} from '../../../constants/styles';

const ReactionCount = ({reactionCount, commentCount, viewCount}) => {
  return (
    <Holder>
      <IconTextWrapper
        icon={Icon2}
        name={'like1'}
        color={COLOR_SECONDARY}
        text={reactionCount}
      />
      <IconTextWrapper icon={Icon2} name={'message1'} text={commentCount} />
      <IconTextWrapper icon={Icon} name={'eye-outline'} text={viewCount} />
    </Holder>
  );
};

export default ReactionCount;

const Holder = styled.View`
  flex-direction: row;
`;

const IconTextWrapper = ({color, icon: Component, name, text}) => {
  return (
    <IconTextContent>
      <IconContent>
        <Component
          name={name}
          size={20}
          color={color || COLOR_TEXT_SECONDARY}
        />
      </IconContent>
      <TextSm color={COLOR_TEXT_PRIMARY}>{text}</TextSm>
    </IconTextContent>
  );
};

const IconTextContent = styled.View`
  margin-right: 30px;
  flex-direction: row;
`;

const IconContent = styled.View`
  margin-right: 10px;
`;
