import React from 'react';
import styled from '@emotion/native';
import {CSS_STYLE_SHADOW_HOLDER} from '../../styles/styles';
import {COLOR_PRIMARY} from '../../constants/styles';
import {TextMd} from '../shared/text/Text';
import ProfileEditButton from './ProfileEditButton';

const ProfileItemContainer = ({
  children,
  title,
  onOpenEdit,
  hideEditButton,
}) => {
  return (
    <Holder style={CSS_STYLE_SHADOW_HOLDER}>
      <Header>
        <TextMd>{title}</TextMd>
        {!hideEditButton && <ProfileEditButton onPress={onOpenEdit} />}
      </Header>
      {children}
    </Holder>
  );
};

export default ProfileItemContainer;

const Holder = styled.View`
  border-radius: 8px;
  width: 100%;
  padding: 10px;
  background-color: ${COLOR_PRIMARY};
  margin-vertical: 7px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;
