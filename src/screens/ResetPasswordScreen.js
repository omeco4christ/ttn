import React from 'react';
import VerticalScroll from '../component/shared/scroll/VerticalScroll';
import {TextLg} from '../component/shared/text/Text';
import {FONT_WEIGHT_BOLD} from '../constants/styles';
import styled from '@emotion/native';
import BackIconButton from '../component/shared/buttons/BackIconButton';
import ResetPasswordForm from '../component/ResetPassword/ResetPasswordForm';
import {URL_FORGET_PASSWORD} from '../constants/navigations';

const ResetPasswordScreen = ({route, navigation}) => {
  if (route.params === undefined || !route.params.token) {
    navigation.navigate(URL_FORGET_PASSWORD);
    return null;
  }
  return (
    <VerticalScroll>
      <Holder>
        <BackIconButton />
        <TitleSection>
          <TextLg weight={FONT_WEIGHT_BOLD}>Reset Password</TextLg>
        </TitleSection>
        <ResetPasswordForm />
      </Holder>
    </VerticalScroll>
  );
};

export default ResetPasswordScreen;

const TitleSection = styled.View`
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Holder = styled.View`
  padding: 20px;
`;
