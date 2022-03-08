import React from 'react';
import styled from '@emotion/native';
import {TextSm} from '../shared/text/Text';
import GhostButton from '../shared/buttons/GhostButton';
import {COLOR_TEXT_SECONDARY} from '../../constants/styles';

const AuthAccountChoice = ({label, buttonTitle, onPress}) => {
  return (
    <Holder>
      <TextSm color={COLOR_TEXT_SECONDARY}>{label} </TextSm>
      <GhostButton
        title={buttonTitle}
        color={COLOR_TEXT_SECONDARY}
        style={{marginLeft: 20}}
        onPress={onPress}
      />
    </Holder>
  );
};

export default AuthAccountChoice;

const Holder = styled.View({
  alignItems: 'center',
  flexDirection: 'row',
});
