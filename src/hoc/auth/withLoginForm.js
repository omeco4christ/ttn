import React from 'react';
import {Formik} from 'formik';
import {loginSchema} from '../../utils/validationSchema';
import useLogin from '../../hooks/auth/useLogin';

const initialValues = {
  username: '',
  password: '',
};
const withLoginForm = WrapperComponent => {
  return function () {
    const {handleLogin, error, reset} = useLogin();
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={value => {
          const object = {email: value.username, password: value.password};
          handleLogin(object);
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
          const usernameProps = getFieldProps('username');
          const passwordProps = getFieldProps('password');
          return (
            <WrapperComponent
              errors={errors}
              touched={touched}
              usernameProps={usernameProps}
              passwordProps={passwordProps}
              onBlur={handleBlur}
              onChange={handleChange}
              onSubmit={handleSubmit}
              serverError={error}
              serverReset={reset}
            />
          );
        }}
      </Formik>
    );
  };
};

export default withLoginForm;
