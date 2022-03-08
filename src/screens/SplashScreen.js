import React, {useEffect} from 'react';
import styled from '@emotion/native';
import {COLOR_PRIMARY, COLOR_TEXT_PRIMARY} from '../constants/styles';
import {TextSm} from '../component/shared/text/Text';
import asyncStorageService from '../services/asyncStorageService';
import {useNavigation} from '@react-navigation/native';
import {URL_LOGIN} from '../constants/navigations';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(async () => {
    const token = await asyncStorageService.getToken();
    if (token) {
      navigation.navigate('Tab');
    } else {
      navigation.navigate(URL_LOGIN);
    }
  }, []);
  return (
    <Holder>
      <Logo
        source={require('../assets/images/tellit.png')}
        width={80}
        style={{width: 80}}
      />
      <TextSm color={COLOR_TEXT_PRIMARY}>Tellit.io</TextSm>
    </Holder>
  );
};

export default SplashScreen;

const Holder = styled.View`
  flex: 1;
  background-color: ${COLOR_PRIMARY};
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  height: 40px;
  margin-bottom: 20px;
`;
