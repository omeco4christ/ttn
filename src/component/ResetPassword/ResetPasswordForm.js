import React from 'react';
import Button from '../shared/buttons/Button';
import Input from '../shared/input/Input';
import styled from '@emotion/native';
import InputHolder from '../shared/input/InputHolder';
import withResetPassword from '../../hoc/auth/withResetPassword';
import ToastMessage from '../shared/ToastMessage';

const ResetPasswordForm = props => {
  const {
    passwordProps,
    confirmPasswordProps,
    errors,
    touched,
    onBlur,
    onChange,
    onSubmit,
    serverError,
    serverReset,
  } = props;
  return (
    <FormHolder>
      <ToastMessage
        message={serverError}
        type={'error'}
        onClose={serverReset}
      />
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
      <InputHolder>
        <Input
          name={confirmPasswordProps.name}
          onChangeText={onChange('confirm_password')}
          onBlur={onBlur('confirm_password')}
          value={confirmPasswordProps.value}
          placeholder="Confirm Password"
          error={touched.confirm_password && errors.confirm_password}
          secureTextEntry={true}
        />
      </InputHolder>

      <InputHolder>
        <Button title="RESET" onPress={onSubmit} />
      </InputHolder>
    </FormHolder>
  );
};

export default withResetPassword(ResetPasswordForm);

const FormHolder = styled.View({
  padding: 10,
});
