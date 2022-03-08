import React from 'react';
import {COLOR_SECONDARY} from '../../constants/styles';
import IconButton from '../shared/buttons/IconButton';
import EditIcon from '../shared/icon/EditIcon';

const ProfileEditButton = ({onPress}) => {
  return (
    <IconButton onPress={onPress}>
      <EditIcon color={COLOR_SECONDARY} />
    </IconButton>
  );
};

export default ProfileEditButton;
