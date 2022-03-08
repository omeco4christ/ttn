import React from 'react';
import styled from '@emotion/native';
import ProfileItemContainer from '../ProfileItemContainer';
import {TextSm} from '../../shared/text/Text';
import {COLOR_TEXT_SECONDARY} from '../../../constants/styles';
import Icon from 'react-native-vector-icons/Feather';

const ProfileContact = ({profile_link, phone_number, email}) => {
  return (
    <ProfileItemContainer title={'Contact'} hideEditButton={true}>
      <ListItem
        label={'Profile Link'}
        value={profile_link}
        icon={Icon}
        iconName={'user'}
      />
      <ListItem
        label={'Phone Number'}
        value={phone_number}
        icon={Icon}
        iconName={'phone'}
      />
      <ListItem
        label={'Email Address'}
        value={email}
        icon={Icon}
        iconName={'mail'}
      />
    </ProfileItemContainer>
  );
};

export default ProfileContact;

const ListItem = ({icon: Icon, iconName, label, value}) => {
  return (
    <ListItemHolder>
      <Icon size={24} name={iconName} color={COLOR_TEXT_SECONDARY} />
      <ListTextSection>
        <TextSm>{label}</TextSm>
        <TextSm color={COLOR_TEXT_SECONDARY}>{value}</TextSm>
      </ListTextSection>
    </ListItemHolder>
  );
};

const ListItemHolder = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  margin-vertical: 5px;
`;

const ListTextSection = styled.View`
  margin-left: 20px;
`;
