import React from 'react';
import Button from '../shared/buttons/Button';
import Input from '../shared/input/Input';
import styled from '@emotion/native';
import InputHolder from '../shared/input/InputHolder';
import ToastMessage from '../shared/ToastMessage';
import withResetPasswordTokenForm from '../../hoc/auth/withResetPasswordTokenForm';

const ResetPasswordTokenForm = props => {
  const {
    tokenProps,
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
          name={tokenProps.name}
          onChangeText={onChange('token')}
          onBlur={onBlur('token')}
          value={tokenProps.value}
          placeholder="Token"
          error={touched.token && errors.token}
          keyboardType={'number-pad'}
        />
      </InputHolder>
      <InputHolder>
        <Button title="RESET" onPress={onSubmit} />
      </InputHolder>
    </FormHolder>
  );
};

export default withResetPasswordTokenForm(ResetPasswordTokenForm);

const FormHolder = styled.View({
  padding: 10,
});
