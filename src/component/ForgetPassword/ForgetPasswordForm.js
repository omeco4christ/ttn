import React from 'react';
import Button from '../shared/buttons/Button';
import Input from '../shared/input/Input';
import styled from '@emotion/native';
import InputHolder from '../shared/input/InputHolder';
import withForgetPasswordForm from '../../hoc/auth/withForgetPasswordForm';
import ToastMessage from '../shared/ToastMessage';

const ForgetPasswordForm = props => {
  const {
    emailProps,
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
          name={emailProps.name}
          onChangeText={onChange('email')}
          onBlur={onBlur('email')}
          value={emailProps.value}
          placeholder="Enter your email"
          error={touched.email && errors.email}
        />
      </InputHolder>

      <InputHolder>
        <Button title="SEND" onPress={onSubmit} />
      </InputHolder>
    </FormHolder>
  );
};

export default withForgetPasswordForm(ForgetPasswordForm);

const FormHolder = styled.View({
  padding: 10,
});
