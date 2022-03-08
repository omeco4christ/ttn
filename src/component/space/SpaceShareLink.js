import React from 'react';
import styled from '@emotion/native';
import AvatarUsernameTime from '../shared/user/AvatarUsernameTime';

const SpaceShareLink = () => {
  return (
    <Holder>
      <AvatarUsernameTime name={'Christiana Kennedy'} />
    </Holder>
  );
};
export default SpaceShareLink;
const Holder = styled.View``;
