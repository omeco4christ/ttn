import React from 'react';
import Button from '../shared/buttons/Button';
import Input from '../shared/input/Input';
import styled from '@emotion/native';
import InputHolder from '../shared/input/InputHolder';
import withChangePassword from '../../hoc/auth/withChangePassword';
import ToastMessage from '../shared/ToastMessage';

const ChangePasswordForm = props => {
  const {
    oldPasswordProps,
    newPasswordProps,
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
          name={oldPasswordProps.name}
          onChangeText={onChange('old_password')}
          onBlur={onBlur('old_password')}
          value={oldPasswordProps.value}
          placeholder="Old Password"
          error={touched.old_password && errors.old_password}
          secureTextEntry={true}
        />
      </InputHolder>
      <InputHolder>
        <Input
          name={newPasswordProps.name}
          onChangeText={onChange('new_password')}
          onBlur={onBlur('new_password')}
          value={newPasswordProps.value}
          placeholder="New Password"
          error={touched.new_password && errors.new_password}
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
        <Button title="CHANGE PASSWORD" onPress={onSubmit} />
      </InputHolder>
    </FormHolder>
  );
};

export default withChangePassword(ChangePasswordForm);

const FormHolder = styled.View({
  padding: 10,
});
