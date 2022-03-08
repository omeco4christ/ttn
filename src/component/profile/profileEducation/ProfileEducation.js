import React, {useState} from 'react';
import styled from '@emotion/native';
import ProfileItemContainer from '../ProfileItemContainer';
import {TextSm, TextXs} from '../../shared/text/Text';
import ProfileCredentialListContainer from '../ProfileCredentialListContainer';
import useModal from '../../../hooks/useModal';
import ProfileEditButton from '../ProfileEditButton';
import {displayDate} from '../../../utils/helper';
import ProfileEducationForm from './ProfileEducationForm';
import {FONT_WEIGHT_BOLD} from '../../../constants/styles';

const initialValues = {
  school_name: '',
  degree: '',
  start_date: '',
  end_date: '',
  course: '',
};

const ProfileEducation = props => {
  const {data = []} = props;
  const modalOfList = useModal();
  const modalOfEdit = useModal();
  const [formValue, setFormValue] = useState(initialValues);
  const handleFormOpen = value => {
    // console.log(value);
    setFormValue(value);
    modalOfEdit.openModal();
  };
  const handleFormClose = () => {
    setFormValue(initialValues);
    modalOfEdit.closeModal();
  };
  return (
    <ProfileItemContainer
      title={'Education'}
      onOpenEdit={modalOfList.openModal}>
      {data.map(history => (
        <ListItem
          key={history.id}
          schoolName={history.school_name}
          degree={history.degree}
          course={history.course}
          startDate={history.start_date}
          endDate={history.end_date}
          present={history.present}
        />
      ))}

      <ProfileCredentialListContainer
        open={modalOfList.modal}
        onClose={modalOfList.closeModal}
        title={'Education'}
        onPressAdd={modalOfEdit.openModal}>
        {data.map(history => (
          <ListItem
            key={history.id}
            id={history.id}
            schoolName={history.school_name}
            degree={history.degree}
            course={history.course}
            startDate={history.start_date}
            endDate={history.end_date}
            present={history.present}
            edit={true}
            onOpenEditForm={handleFormOpen}
          />
        ))}
      </ProfileCredentialListContainer>
      {modalOfEdit.modal && (
        <ProfileEducationForm
          initialValues={formValue}
          onClose={handleFormClose}
          open={modalOfEdit.modal}
        />
      )}
    </ProfileItemContainer>
  );
};

export default ProfileEducation;

const ListItem = props => {
  const {
    id,
    schoolName,
    degree,
    course,
    startDate,
    endDate,
    edit,
    onOpenEditForm,
  } = props;

  const handleEdit = () => {
    onOpenEditForm({
      id,
      school_name: schoolName,
      degree,
      course,
      start_date: startDate,
      end_date: endDate,
      current: false,
    });
  };

  return (
    <Holder>
      <BodySection>
        <TextSm weight={FONT_WEIGHT_BOLD}>{schoolName}</TextSm>
        <TextSm>
          {degree} {course}
        </TextSm>
        <TextXs>
          {displayDate(startDate)} - {displayDate(endDate)}
        </TextXs>
      </BodySection>
      {edit && <ProfileEditButton onPress={handleEdit} />}
    </Holder>
  );
};

const Holder = styled.View`
  padding-left: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const BodySection = styled.View``;
