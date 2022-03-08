import React from 'react';
import ProfileItemContainer from '../ProfileItemContainer';
import {TextSm} from '../../shared/text/Text';
import ProfileAboutEditForm from './ProfileAboutEditForm';
import useModal from '../../../hooks/useModal';

const ProfileAbout = ({about}) => {
  const {openModal, modal, closeModal} = useModal();
  return (
    <ProfileItemContainer title={'About'} onOpenEdit={openModal}>
      <TextSm>{about}</TextSm>
      <ProfileAboutEditForm
        initialValues={{about}}
        open={modal}
        onClose={closeModal}
      />
    </ProfileItemContainer>
  );
};

export default ProfileAbout;
