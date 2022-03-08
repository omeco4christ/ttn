import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLOR_TEXT_PRIMARY} from '../../../constants/styles';
import IconButton from './IconButton';
import {useNavigation} from '@react-navigation/native';

const BackIconButton = () => {
  const navigation = useNavigation();
  return (
    <IconButton onPress={() => navigation.goBack()}>
      <Icon name={'arrowleft'} size={24} color={COLOR_TEXT_PRIMARY} />
    </IconButton>
  );
};

export default BackIconButton;
