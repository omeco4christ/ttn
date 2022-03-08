import React, {useEffect} from 'react';
import InputHolder from '../../shared/input/InputHolder';
import Input from '../../shared/input/Input';
import Button from '../../shared/buttons/Button';
import ProfileEditContainer from '../ProfileEditContainer';
import {useFormik} from 'formik';
import useModal from '../../../hooks/useModal';
import styled from '@emotion/native';
import {CSS_INPUT} from '../../../styles/styles';
import {TextSm} from '../../shared/text/Text';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {displayDate} from '../../../utils/helper';
import useUpdateEducationHistory from '../../../hooks/user/useUpdateEducationHistory';
import useAddEducationHistory from '../../../hooks/user/useAddEducationHistory';

const ProfileEducationForm = props => {
  console.log(props);
  const startDateModal = useModal();
  const endDateModal = useModal();
  const {open, onClose, initialValues} = props;
  const {handleUpdate, isSuccess} = useUpdateEducationHistory();
  const {handleAdd, isSuccess: addSuccess} = useAddEducationHistory();
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      if (initialValues.id) {
        handleUpdate(values);
      } else {
        handleAdd(values);
      }
    },
  });
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    getFieldProps,
    setFieldValue,
  } = formik;

  const schoolNameProps = getFieldProps('school_name');
  const degreeProps = getFieldProps('degree');
  const courseProps = getFieldProps('course');
  const startDateProps = getFieldProps('start_date');
  const endDateProps = getFieldProps('end_date');
  useEffect(() => {
    if (isSuccess || addSuccess) {
      onClose();
    }
  }, [isSuccess, addSuccess]);
  return (
    <ProfileEditContainer
      title={'Edit Education History'}
      open={open}
      onClose={onClose}>
      <InputHolder>
        <Input
          placeholder={'School Name'}
          name={schoolNameProps.name}
          value={schoolNameProps.value}
          onChangeText={handleChange('school_name')}
          onBlur={handleBlur('school_name')}
          errors={touched.school_name && errors.school_name}
        />
      </InputHolder>
      <InputHolder>
        <Input
          placeholder={'Degree'}
          name={degreeProps.name}
          value={degreeProps.value}
          onChangeText={handleChange('degree')}
          onBlur={handleBlur('degree')}
          errors={touched.degree && errors.degree}
        />
      </InputHolder>

      <InputHolder>
        <Input
          placeholder={'Course'}
          name={courseProps.name}
          value={courseProps.value}
          onChangeText={handleChange('course')}
          onBlur={handleBlur('course')}
          errors={touched.course && errors.course}
        />
      </InputHolder>
      <InputHolder>
        <DateHolder>
          <DateInput
            placeholder={'Start Date'}
            onPress={startDateModal.openModal}
            value={startDateProps.value}
            style={{marginRight: 20}}
          />
          <DateTimePickerModal
            mode={'date'}
            isVisible={startDateModal.modal}
            date={new Date()}
            onConfirm={date => {
              setFieldValue('start_date', date);
              startDateModal.closeModal();
            }}
            onCancel={() => {
              startDateModal.closeModal();
            }}
          />
          <DateInput
            placeholder={'End Date'}
            value={endDateProps.value}
            onPress={endDateModal.openModal}
          />
          <DateTimePickerModal
            modal
            isVisible={endDateModal.modal}
            onConfirm={date => {
              setFieldValue('end_date', date);
              endDateModal.closeModal();
            }}
            onCancel={() => {
              endDateModal.closeModal();
            }}
          />
        </DateHolder>
      </InputHolder>

      <Button
        title={initialValues.id ? 'Edit' : 'Add'}
        onPress={handleSubmit}
      />
    </ProfileEditContainer>
  );
};

export default ProfileEducationForm;

const DateHolder = styled.View`
  flex-direction: row;
`;

const DateInput = ({onPress, value, placeholder, ...others}) => {
  return (
    <DateInputContent onPress={onPress} {...others}>
      <TextSm>{value ? displayDate(value) : placeholder}</TextSm>
    </DateInputContent>
  );
};

const DateInputContent = styled.TouchableOpacity`
  ${CSS_INPUT};
  height: 44px;
  border-radius: 22px;
  justify-content: center;
  flex: 1;
`;
