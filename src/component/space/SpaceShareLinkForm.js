import React from 'react';
import {COLOR_LIGHT, COLOR_TEXT_SECONDARY} from '../../constants/styles';
import AvatarUsernameTime from '../shared/user/AvatarUsernameTime';
import styled from '@emotion/native';
import Input from '../shared/input/Input';

const SpaceShareLinkForm = () => {
  return (
    <Holder>
      <BodySection>
        <AvatarUsernameTime name={'Christiana Kennedy'} />
        <DescInput
          placeholder={'Say something about this...'}
          placeholderTextColor={COLOR_TEXT_SECONDARY}
        />
        <Input placeholder={'Enter a link'} />
      </BodySection>
    </Holder>
  );
};

export default SpaceShareLinkForm;

const Holder = styled.View``;

const TipSection = styled.View`
  padding: 30px;
  background-color: ${COLOR_LIGHT};
  margin-top: 20px;
`;

const BodySection = styled.View`
  margin-top: 20px;
`;

const DescInput = styled.TextInput`
  font-size: 22px;
  border-bottom-width: 1px;
  margin-vertical: 30px;
`;
