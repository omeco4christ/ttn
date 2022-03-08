import React from 'react';
import ChipButton from './ChipButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLOR_WHITE} from '../../../constants/styles';

const PostButton = () => {
  return (
    <ChipButton
      title={'POST'}
      icon={<Icon name={'add'} size={24} color={COLOR_WHITE} />}
    />
  );
};

export default PostButton;
