import React from 'react';
import styled from '@emotion/native';
import ProfileItemContainer from './ProfileItemContainer';
import {TextSm} from '../shared/text/Text';
// import {TextSm, TextXs} from '../shared/text/Text';
// import {COLOR_TEXT_SECONDARY} from '../../constants/styles';

const ProfileExperience = ({position, company, duration, from, to}) => {
  return (
    <ProfileItemContainer title={'Experience'} hideEditButton={true}>
      <TextSm>No Experience yet</TextSm>
      {/*<Holder>*/}
      {/*  <TextSm>{position}</TextSm>*/}
      {/*  <TextSm color={COLOR_TEXT_SECONDARY}>{company}</TextSm>*/}
      {/*  <TextXs color={COLOR_TEXT_SECONDARY}>*/}
      {/*    {from} - {to}. {duration}*/}
      {/*  </TextXs>*/}
      {/*</Holder>*/}
    </ProfileItemContainer>
  );
};

export default ProfileExperience;

const Holder = styled.View`
  padding-left: 15px;
`;
