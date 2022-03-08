import React from 'react';
import styled from '@emotion/native';
import {FONT_WEIGHT_BLACK} from '../../../constants/styles';
import {TextExLg, TextSm} from '../../shared/text/Text';

const LoginHeader = () => {
  return (
    <Holder>
      <TextExLg weight={FONT_WEIGHT_BLACK} testID="welcome">
        Welcome back
      </TextExLg>
      <TextSm>Login to your account</TextSm>
    </Holder>
  );
};

export default LoginHeader;

const Holder = styled.View({
  marginBottom: 50,
});
