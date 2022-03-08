import React from 'react';
import AuthContainer from '../AuthShared/AuthContainer';
import SignupHeader from './component/SignupHeader';
import SignupForm from './component/SignupForm';
import {URL_LOGIN} from '../../constants/navigations';
import AuthAccountChoice from '../AuthShared/AuthAccountChoice';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
    const navigation = useNavigation();
    return (
        <AuthContainer>
            <SignupHeader/>
            <SignupForm/>
            <AuthAccountChoice
                label="Already have an account?"
                buttonTitle="Login"
                onPress={() => navigation.navigate(URL_LOGIN)}
            />
        </AuthContainer>
    );
};

export default Signup;
