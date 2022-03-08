import React, {useEffect} from 'react';
import InputHolder from '../../shared/input/InputHolder';
import Input from '../../shared/input/Input';
import Button from '../../shared/buttons/Button';
import ProfileEditContainer from '../ProfileEditContainer';
import {useFormik} from 'formik';
import useProfileEditDetail from '../../../hooks/user/useProfileEditDetail';

const ProfileUserEditForm = props => {
  const {open, onClose, initialValues} = props;
  const {handleUpdate, isSuccess} = useProfileEditDetail();
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      handleUpdate(values);
    },
  });
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    getFieldProps,
  } = formik;
  const firstNameProps = getFieldProps('first_name');
  const lastNameProps = getFieldProps('last_name');
  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);
  return (
    <ProfileEditContainer title={'Edit Names'} open={open} onClose={onClose}>
      <InputHolder>
        <Input
          placeholder={'First name'}
          name={firstNameProps.name}
          value={firstNameProps.value}
          onChangeText={handleChange('first_name')}
          onBlur={handleBlur('first_name')}
          errors={touched.first_name && errors.first_name}
        />
      </InputHolder>
      <InputHolder>
        <Input
          placeholder={'Last name'}
          name={lastNameProps.name}
          value={lastNameProps.value}
          onChangeText={handleChange('last_name')}
          onBlur={handleBlur('last_name')}
          errors={touched.last_name && errors.last_name}
        />
      </InputHolder>
      <Button title={'Edit'} onPress={handleSubmit} />
    </ProfileEditContainer>
  );
};

export default ProfileUserEditForm;
