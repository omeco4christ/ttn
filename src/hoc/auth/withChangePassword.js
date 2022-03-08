import React from 'react';
import {Formik} from 'formik';
import {changePasswordSchema} from '../../utils/validationSchema';
import useChangePassword from '../../hooks/auth/useChangePassword';

const initialValues = {
  old_password: '',
  new_password: '',
  confirm_password: '',
};

const withChangePasswordForm = WrapperComponent => {
  return function () {
    const {handleChangePassword, error, reset} = useChangePassword();
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={changePasswordSchema}
        onSubmit={values => {
          const {confirm_password, ...others} = values;
          handleChangePassword(others);
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
              oldPasswordProps={getFieldProps('old_password')}
              newPasswordProps={getFieldProps('new_password')}
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

export default withChangePasswordForm;
