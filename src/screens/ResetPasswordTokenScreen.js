import React from 'react';
import VerticalScroll from '../component/shared/scroll/VerticalScroll';
import {TextLg, TextSm} from '../component/shared/text/Text';
import {FONT_WEIGHT_BOLD} from '../constants/styles';
import styled from '@emotion/native';
import BackIconButton from '../component/shared/buttons/BackIconButton';
import ResetPasswordTokenForm from '../component/ResetPassword/ResetPasswordTokenForm';

const ResetPasswordTokenScreen = () => {
  return (
    <VerticalScroll>
      <Holder>
        <BackIconButton />
        <TitleSection>
          <TextLg weight={FONT_WEIGHT_BOLD}>Validation Token</TextLg>
        </TitleSection>
        <DescriptionSection>
          <TextSm>
            Please enter the validation token that was sent to your email
            address.
          </TextSm>
        </DescriptionSection>
        <ResetPasswordTokenForm />
      </Holder>
    </VerticalScroll>
  );
};

export default ResetPasswordTokenScreen;

const TitleSection = styled.View`
  margin-top: 50px;
`;

const Holder = styled.View`
  padding: 20px;
`;

const DescriptionSection = styled.View`
  margin-vertical: 20px;
`;
