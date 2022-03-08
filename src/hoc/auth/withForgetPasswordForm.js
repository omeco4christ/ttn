import React from 'react';
import {Formik} from 'formik';
import {forgetPasswordSchema} from '../../utils/validationSchema';
import useForgetPassword from '../../hooks/auth/useForgetPassword';

const withForgetPasswordForm = WrapperComponent => {
  return function () {
    const {handleSendEmail, error, reset} = useForgetPassword();
    return (
      <Formik
        initialValues={{email: ''}}
        validationSchema={forgetPasswordSchema}
        onSubmit={values => {
          console.log(values);
          handleSendEmail(values);
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
              emailProps={getFieldProps('email')}
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

export default withForgetPasswordForm;
