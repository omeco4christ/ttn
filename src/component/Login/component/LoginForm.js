import React from 'react';
import Button from '../../shared/buttons/Button';
import Input from '../../shared/input/Input';
import {TextSm} from '../../shared/text/Text';
import styled from '@emotion/native';
import InputHolder from '../../shared/input/InputHolder';
import withLoginForm from '../../../hoc/auth/withLoginForm';
import ToastMessage from '../../shared/ToastMessage';
import {useNavigation} from '@react-navigation/native';
import {URL_FORGET_PASSWORD} from '../../../constants/navigations';

const LoginForm = props => {
  const {
    errors,
    touched,
    usernameProps,
    passwordProps,
    onBlur,
    onChange,
    onSubmit,
    serverError,
    serverReset,
  } = props;
  const navigation = useNavigation();
  return (
    <FormHolder>
      <ToastMessage
        message={serverError}
        type={'error'}
        onClose={serverReset}
      />
      <InputHolder>
        <Input
          name={usernameProps.name}
          onChangeText={onChange('username')}
          onBlur={onBlur('username')}
          value={usernameProps.value}
          placeholder="Username"
          error={touched.username && errors.username}
        />
      </InputHolder>

      <InputHolder>
        <Input
          name={passwordProps.name}
          onChangeText={onChange('password')}
          onBlur={onBlur('password')}
          value={passwordProps.value}
          placeholder="Password"
          error={touched.password && errors.password}
          secureTextEntry={true}
        />
      </InputHolder>
      <ForgetPasswordHolder
        onPress={() => navigation.navigate(URL_FORGET_PASSWORD)}>
        <TextSm>Forget your Password?</TextSm>
      </ForgetPasswordHolder>
      <InputHolder>
        <Button title="LOGIN" onPress={onSubmit} />
      </InputHolder>
    </FormHolder>
  );
};

export default withLoginForm(LoginForm);

const FormHolder = styled.View({
  padding: 10,
});

const ForgetPasswordHolder = styled.TouchableOpacity({
  marginTop: 10,
  marginBottom: 10,
});
