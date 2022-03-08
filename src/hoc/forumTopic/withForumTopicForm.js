import React from 'react';
import {Formik} from 'formik';
import useCreateForumTopic from '../../hooks/forumTopic/useCreateForumTopic';
import {forumTopicSchema} from '../../utils/validationSchema';

const initialValues = {
  title: '',
  description: '',
};

const withForumTopicForm = WrapperComponent => {
  return function () {
    const {handleCreateTopic, error, isLoading, reset} = useCreateForumTopic();
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={forumTopicSchema}
        onSubmit={values => {
          handleCreateTopic(values);
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
              titleProps={getFieldProps('title')}
              descriptionProps={getFieldProps('description')}
              onChange={handleChange}
              onBlur={handleBlur}
              onSubmit={handleSubmit}
              errors={errors}
              touched={touched}
              serverError={error}
              serverReset={reset}
              loading={isLoading}
            />
          );
        }}
      </Formik>
    );
  };
};

export default withForumTopicForm;
