import React from 'react';
import {Formik} from 'formik';
import {signupSchema} from '../../utils/validationSchema';
import useSignup from '../../hooks/auth/useSignup';

const initialValues = {
  first_name: '',
  last_name: '',
  username: '',
  phone_number: '',
  email: '',
  password: '',
  confirm_password: '',
};
const withSignupForm = WrapperComponent => {
  return function () {
    const {handleSignup, isLoading, error, reset} = useSignup();
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={value => {
          const {confirm_password, ...others} = value;
          handleSignup(others);
        }}>
        {formik => {
          const {
            errors,
            touched,
            getFieldProps,
            handleBlur,
            handleChange,
            handleSubmit,
          } = formik;
          const firstNameProps = getFieldProps('first_name');
          const lastNameProps = getFieldProps('last_name');
          const usernameProps = getFieldProps('username');
          const phoneNumberProps = getFieldProps('phone_number');
          const emailProps = getFieldProps('email');
          const passwordProps = getFieldProps('password');
          const confirmPasswordProps = getFieldProps('confirm_password');
          return (
            <WrapperComponent
              errors={errors}
              touched={touched}
              firstNameProps={firstNameProps}
              lastNameProps={lastNameProps}
              usernameProps={usernameProps}
              phoneNumberProps={phoneNumberProps}
              emailProps={emailProps}
              passwordProps={passwordProps}
              confirmPasswordProps={confirmPasswordProps}
              onBlur={handleBlur}
              onChange={handleChange}
              onSubmit={handleSubmit}
              serverError={error}
              loading={isLoading}
              serverReset={reset}
            />
          );
        }}
      </Formik>
    );
  };
};

export default withSignupForm;
