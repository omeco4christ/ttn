import React from 'react';
import VerticalScroll from '../component/shared/scroll/VerticalScroll';
import ForgetPasswordForm from '../component/ForgetPassword/ForgetPasswordForm';
import {TextLg, TextSm} from '../component/shared/text/Text';
import {FONT_WEIGHT_BOLD} from '../constants/styles';
import styled from '@emotion/native';
import BackIconButton from '../component/shared/buttons/BackIconButton';

const ForgetPasswordScreen = () => {
  return (
    <VerticalScroll>
      <Holder>
        <BackIconButton />
        <TitleSection>
          <TextLg weight={FONT_WEIGHT_BOLD}>Forget Password</TextLg>
        </TitleSection>
        <DescriptionSection>
          <TextSm>
            Please enter your email address. You will receive a link to create a
            new password via email.
          </TextSm>
        </DescriptionSection>

        <ForgetPasswordForm />
      </Holder>
    </VerticalScroll>
  );
};

export default ForgetPasswordScreen;

const TitleSection = styled.View`
  margin-top: 50px;
`;

const Holder = styled.View`
  padding: 20px;
`;

const DescriptionSection = styled.View`
  margin-vertical: 20px;
`;
