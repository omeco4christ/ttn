import React from 'react';
import {ScrollView} from 'react-native';

const VerticalScroll = ({children}) => {
  return <ScrollView style={{flex: 1}}>{children}</ScrollView>;
};

export default VerticalScroll;
