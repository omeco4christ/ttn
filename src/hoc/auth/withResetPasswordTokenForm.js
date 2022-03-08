import React from 'react';
import {Formik} from 'formik';
import {resetPasswordTokenSchema} from '../../utils/validationSchema';
import useResetPasswordToken from '../../hooks/auth/useResetPasswordToken';

const initialValues = {token: ''};

const withResetPasswordTokenForm = WrapperComponent => {
  return function () {
    const {handleValidateToken, error, reset} = useResetPasswordToken();
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={resetPasswordTokenSchema}
        onSubmit={values => {
          console.log(values);
          handleValidateToken(values);
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
              tokenProps={getFieldProps('token')}
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

export default withResetPasswordTokenForm;
