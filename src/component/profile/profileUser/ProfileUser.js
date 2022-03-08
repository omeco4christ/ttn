import React from 'react';
import styled from '@emotion/native';
import {TextMd, TextXs} from '../../shared/text/Text';
import {COLOR_TEXT_SECONDARY} from '../../../constants/styles';
import ProfileEditButton from '../ProfileEditButton';
import ProfileUserEditForm from './ProfileUserEditForm';
import useModal from '../../../hooks/useModal';

const ProfileUser = ({photo, first_name, last_name, username}) => {
  const {openModal, closeModal, modal} = useModal();
  return (
    <Holder>
      <ProfilePhoto source={require('../../../assets/images/user.jpg')} />
      <TextSection>
        <TextMd>
          {first_name} {last_name}
        </TextMd>
        <TextXs color={COLOR_TEXT_SECONDARY}>{username}</TextXs>
      </TextSection>
      <ProfileEditButton onPress={openModal} />
      <ProfileUserEditForm
        open={modal}
        onClose={closeModal}
        initialValues={{first_name, last_name}}
      />
    </Holder>
  );
};

export default ProfileUser;

const Holder = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ProfilePhoto = styled.Image`
  height: 88px;
  width: 88px;
  border-radius: 44px;
`;

const TextSection = styled.View`
  margin-left: 15px;
  flex: 1;
`;
