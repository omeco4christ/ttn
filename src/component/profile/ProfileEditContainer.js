import React from 'react';
import styled from '@emotion/native';
import Popover from '../shared/Popover';
import {TextLg} from '../shared/text/Text';
import {FONT_WEIGHT_BOLD} from '../../constants/styles';

const ProfileEditContainer = ({children, title, open, onClose}) => {
  return (
    <Popover
      style={{
        flex: 1,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}
      open={open}
      onClose={onClose}
      modalType={'bottom'}>
      <Holder>
        <TextLg weight={FONT_WEIGHT_BOLD} style={{marginBottom: 20}}>
          {title}
        </TextLg>
        {children}
      </Holder>
    </Popover>
  );
};

export default ProfileEditContainer;

const Holder = styled.View`
  padding: 20px;
  height: 90%;
`;
