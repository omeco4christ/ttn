import React from 'react';
import Button from '../../shared/buttons/Button';
import Input from '../../shared/input/Input';
import styled from '@emotion/native';
import InputHolder from '../../shared/input/InputHolder';
import withSignupForm from '../../../hoc/auth/withSignupForm';
import ToastMessage from '../../shared/ToastMessage';

const SignupForm = props => {
  const {
    errors,
    touched,
    firstNameProps,
    lastNameProps,
    usernameProps,
    phoneNumberProps,
    emailProps,
    passwordProps,
    confirmPasswordProps,
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
          name={firstNameProps.name}
          onChangeText={onChange('first_name')}
          onBlur={onBlur('first_name')}
          value={firstNameProps.value}
          placeholder="First Name"
          error={touched.first_name && errors.first_name}
        />
      </InputHolder>
      <InputHolder>
        <Input
          name={lastNameProps.name}
          onChangeText={onChange('last_name')}
          onBlur={onBlur('last_name')}
          value={lastNameProps.value}
          placeholder="Last Name"
          error={touched.last_name && errors.last_name}
        />
      </InputHolder>
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
          name={phoneNumberProps.name}
          onChangeText={onChange('phone_number')}
          onBlur={onBlur('phone_number')}
          value={phoneNumberProps.value}
          placeholder="Phone"
          keyboardType={'number-pad'}
          error={touched.phone_number && errors.phone_number}
        />
      </InputHolder>
      <InputHolder>
        <Input
          name={emailProps.name}
          onChangeText={onChange('email')}
          onBlur={onBlur('email')}
          value={emailProps.value}
          placeholder="Email"
          error={touched.email && errors.email}
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
        <Button title="SIGN UP" onPress={onSubmit} />
      </InputHolder>
    </FormHolder>
  );
};

export default withSignupForm(SignupForm);

const FormHolder = styled.View({
  padding: 10,
});
