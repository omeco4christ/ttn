import React from 'react';
import styled from '@emotion/native';
import Button from '../component/shared/buttons/Button';
import {TextLg, TextSm} from '../component/shared/text/Text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLOR_TEXT_PRIMARY, FONT_WEIGHT_BOLD} from '../constants/styles';
import {URL_LOGIN} from '../constants/navigations';
// import Icon from 'react-native-vector-icons/MaterialIcons'
const ResetPasswordSuccessScreen = ({navigation}) => {
  return (
    <Holder>
      <MaterialIcons
        name={'check-circle-outline'}
        color={COLOR_TEXT_PRIMARY}
        size={70}
      />
      <TextLg weight={FONT_WEIGHT_BOLD}>Success!</TextLg>

      <TextSection>
        <TextSm textAlign={'center'}>
          Password reset successfully, please proceed to login to continue
        </TextSm>
      </TextSection>
      <ButtonSection>
        <Button
          title={'Proceed to Login'}
          onPress={() => navigation.navigate(URL_LOGIN)}
        />
      </ButtonSection>
    </Holder>
  );
};

export default ResetPasswordSuccessScreen;

const Holder = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const TextSection = styled.View`
  margin-top: 50px;
  margin-bottom: 40px;
`;
const ButtonSection = styled.View`
  width: 100%;
`;
