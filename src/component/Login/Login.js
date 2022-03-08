import React from 'react';
import LoginForm from './component/LoginForm';
import styled from '@emotion/native';
import LoginHeader from './component/LoginHeader';
import {TextXs} from '../shared/text/Text';
import {COLOR_TEXT_SECONDARY} from '../../constants/styles';
import SocialAuth from '../SocialAuth/SocialAuth';
import AuthAccountChoice from '../AuthShared/AuthAccountChoice';
import {useNavigation} from '@react-navigation/native';
import {URL_SIGN_UP} from '../../constants/navigations';
import AuthContainer from '../AuthShared/AuthContainer';

const Login = () => {
    const navigation = useNavigation();
    return (
        <AuthContainer>
            <LoginHeader/>
            <LoginForm/>
            <AuthAccountChoice
                label="Don't have account?"
                buttonTitle="Sign Up"
                onPress={() => navigation.navigate(URL_SIGN_UP)}
            />
            <SocialWrap>
                <TextXs color={COLOR_TEXT_SECONDARY}>Or log in with</TextXs>
                <SocialAuth/>
            </SocialWrap>
        </AuthContainer>
    );
};

export default Login;

const SocialWrap = styled.View`
  margin-top: 50px;
  align-items: center;
`;
