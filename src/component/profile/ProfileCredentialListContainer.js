import React from 'react';
// import {Modal, View} from 'react-native';
import styled from '@emotion/native';
import {COLOR_WHITE, FONT_WEIGHT_BOLD} from '../../constants/styles';
import Popover from '../shared/Popover';
import Feather from 'react-native-vector-icons/Feather';
import {TextLg} from '../shared/text/Text';
import IconButton from '../shared/buttons/IconButton';

const ProfileCredentialListContainer = ({
  children,
  title,
  open,
  onClose,
  onPressAdd,
}) => {
  return (
    <Popover open={open} onClose={onClose} style={{height: '100%'}}>
      <Holder>
        <IconButton onPress={onClose}>
          <Feather name={'x'} color={COLOR_WHITE} size={24} />
        </IconButton>
        <HeadSection>
          <TextLg weight={FONT_WEIGHT_BOLD}>{title}</TextLg>

          <IconButton onPress={onPressAdd}>
            <Feather name={'plus'} color={COLOR_WHITE} size={24} />
          </IconButton>
        </HeadSection>
        {children}
      </Holder>
    </Popover>
  );
};

export default ProfileCredentialListContainer;

const Holder = styled.View`
  flex: 1;
  padding: 20px;
`;

const HeadSection = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
