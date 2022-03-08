import React from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import BackIconButton from '../../shared/buttons/BackIconButton';
import {TextMd} from '../../shared/text/Text';
import {FONT_WEIGHT_NORMAL} from '../../../constants/styles';

const UserSpaceHeader = () => {
  return (
    <Holder>
      <BackIconButton />
      <View style={{marginLeft: 10}}>
        <TextMd weight={FONT_WEIGHT_NORMAL}>My Space</TextMd>
      </View>
    </Holder>
  );
};

export default UserSpaceHeader;

const Holder = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
