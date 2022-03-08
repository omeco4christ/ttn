import React from 'react';
import styled from '@emotion/native';
import BackIconButton from '../component/shared/buttons/BackIconButton';
import useGetUser from '../hooks/user/useGetUser';
import ProfileUser from '../component/profile/profileUser/ProfileUser';
import ProfileAbout from '../component/profile/profileAbout/ProfileAbout';
import ProfileContact from '../component/profile/ProfileContact/ProfileContact';
import VerticalScroll from '../component/shared/scroll/VerticalScroll';
import ProfileEducation from '../component/profile/profileEducation/ProfileEducation';
import ProfileExperience from '../component/profile/ProfileExperience';
import useGetEducationHistory from '../hooks/user/useGetEducationHistory';

const ProfileScreen = () => {
  const {
    userNames,
    about,
    counters,
    contact,
    education,
    experience,
    isSuccess,
  } = useGetUser();
  const educationCredential = useGetEducationHistory();
  return (
    <VerticalScroll>
      <Holder>
        <BackIconButton />
        {isSuccess && (
          <>
            <ProfileUser {...userNames} />
            {/*<ProfileCounter {...counters} />*/}
            <ProfileAbout about={about} />
            <ProfileContact {...contact} />
            {educationCredential.isSuccess && (
              <ProfileEducation data={educationCredential.data} />
            )}
            <ProfileExperience {...experience} />
          </>
        )}
      </Holder>
    </VerticalScroll>
  );
};

export default ProfileScreen;

const Holder = styled.View`
  padding: 15px;
`;
