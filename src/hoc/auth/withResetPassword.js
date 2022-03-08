import React from 'react';
import {Formik} from 'formik';
import {resetPasswordSchema} from '../../utils/validationSchema';
import useResetPassword from '../../hooks/auth/useResetPassword';

const initialValues = {password: '', confirm_password: ''};

const withResetPasswordForm = WrapperComponent => {
  return function () {
    const {handleResetPassword, error, reset} = useResetPassword();
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={resetPasswordSchema}
        onSubmit={values => {
          const passwordObj = {password: values.password};
          handleResetPassword(passwordObj);
        }}>
        {formik => {
          const {
            getFieldProps,
            handleSubmit,
            errors,
            touched,
            handleChange,
            handleBlur,
          } = formik;
          return (
            <WrapperComponent
              passwordProps={getFieldProps('password')}
              confirmPasswordProps={getFieldProps('confirm_password')}
              onChange={handleChange}
              onBlur={handleBlur}
              onSubmit={handleSubmit}
              errors={errors}
              touched={touched}
              serverError={error}
              serverReset={reset}
            />
          );
        }}
      </Formik>
    );
  };
};

export default withResetPasswordForm;
