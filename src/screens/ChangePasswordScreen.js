import React from 'react';
import VerticalScroll from '../component/shared/scroll/VerticalScroll';
import {TextLg} from '../component/shared/text/Text';
import {FONT_WEIGHT_BOLD} from '../constants/styles';
import styled from '@emotion/native';
import BackIconButton from '../component/shared/buttons/BackIconButton';
import ChangePasswordForm from '../component/Settings/ChangePasswordForm';

const ChangePasswordScreen = () => {
  return (
    <VerticalScroll>
      <Holder>
        <BackIconButton />
        <TitleSection>
          <TextLg weight={FONT_WEIGHT_BOLD}>Change Password</TextLg>
        </TitleSection>
        <ChangePasswordForm />
      </Holder>
    </VerticalScroll>
  );
};

export default ChangePasswordScreen;

const TitleSection = styled.View`
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Holder = styled.View`
  padding: 20px;
`;
