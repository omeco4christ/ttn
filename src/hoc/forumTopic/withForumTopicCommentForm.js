import React from 'react';
import {Formik} from 'formik';
import {forumTopicCommentSchema} from '../../utils/validationSchema';
import useCreateForumTopicComment from '../../hooks/forumTopic/useCreateForumTopicComment';

const initialValues = {
  comment: '',
};

const withForumTopicCommentForm = WrapperComponent => {
  return function () {
    const {handleAddComment, isSuccess} = useCreateForumTopicComment();
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={forumTopicCommentSchema}
        onSubmit={values => {
          handleAddComment(values);
        }}>
        {formik => {
          const {
            getFieldProps,
            handleSubmit,
            errors,
            touched,
            handleChange,
            handleBlur,
            resetForm,
          } = formik;
          return (
            <WrapperComponent
              commentProps={getFieldProps('comment')}
              onChange={handleChange}
              onBlur={handleBlur}
              onSubmit={handleSubmit}
              errors={errors}
              touched={touched}
              resetForm={resetForm}
              serverSuccess={isSuccess}
            />
          );
        }}
      </Formik>
    );
  };
};

export default withForumTopicCommentForm;
