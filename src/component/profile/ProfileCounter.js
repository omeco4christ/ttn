import React from 'react';
import styled from '@emotion/native';
import {TextSm} from '../shared/text/Text';
import {COLOR_TEXT_SECONDARY, FONT_WEIGHT_BOLD} from '../../constants/styles';

const ProfileCounter = ({post, following, follower}) => {
  return (
    <Holder>
      <Counter label={'Post'} count={post} />
      <Counter label={'Following'} count={following} />
      <Counter label={'Follower'} count={follower} />
    </Holder>
  );
};

export default ProfileCounter;

const Holder = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 30px;
`;

const Counter = ({count, label}) => {
  return (
    <CounterHolder>
      <TextSm weight={FONT_WEIGHT_BOLD}>{count}</TextSm>
      <LabelSection>
        <TextSm color={COLOR_TEXT_SECONDARY}>{label}</TextSm>
      </LabelSection>
    </CounterHolder>
  );
};

const CounterHolder = styled.View`
  flex-direction: row;
`;

const LabelSection = styled.View`
  margin-left: 5px;
`;
