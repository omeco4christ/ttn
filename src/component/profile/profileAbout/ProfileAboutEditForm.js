import React, {useEffect} from 'react';
import InputHolder from '../../shared/input/InputHolder';
import Input from '../../shared/input/Input';
import Button from '../../shared/buttons/Button';
import ProfileEditContainer from '../ProfileEditContainer';
import {useFormik} from 'formik';
import useProfileEditDetail from '../../../hooks/user/useProfileEditDetail';

const ProfileAboutEditForm = props => {
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
  const aboutProps = getFieldProps('about');
  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);
  return (
    <ProfileEditContainer title={'Edit About me'} open={open} onClose={onClose}>
      <InputHolder>
        <Input
          multiline={true}
          numberOfLines={9}
          placeholder={'About me'}
          name={aboutProps.name}
          value={aboutProps.value}
          onChangeText={handleChange('about')}
          onBlur={handleBlur('about')}
          errors={touched.about && errors.about}
        />
      </InputHolder>
      <Button title={'Edit'} onPress={handleSubmit} />
    </ProfileEditContainer>
  );
};

export default ProfileAboutEditForm;
