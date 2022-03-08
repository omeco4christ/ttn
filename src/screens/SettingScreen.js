import React from 'react';
import VerticalScroll from '../component/shared/scroll/VerticalScroll';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLOR_TEXT_PRIMARY, COLOR_WHITE} from '../constants/styles';
import {TextSm} from '../component/shared/text/Text';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Feather';
import {URL_CHANGE_PASSWORD} from '../constants/navigations';
import {useNavigation} from '@react-navigation/native';

const SettingScreen = () => {
  return (
    <VerticalScroll>
      <Holder>
        <ListItem
          path={URL_CHANGE_PASSWORD}
          icon={MaterialIcons}
          name={'lock-open'}
          label={'Change Password'}
        />
      </Holder>
    </VerticalScroll>
  );
};

export default SettingScreen;

const Holder = styled.View`
  padding: 20px;
`;

const ListItem = ({icon: Icon, name, path, label}) => {
  const navigation = useNavigation();
  return (
    <ListItemHolder onPress={() => navigation.navigate(path)}>
      <ListPrimarySection>
        <Icon
          style={{marginRight: 10}}
          name={name}
          size={24}
          color={COLOR_TEXT_PRIMARY}
        />
        <TextSm>{label}</TextSm>
      </ListPrimarySection>
      <Icon name={'chevron-right'} color={COLOR_WHITE} size={24} />
    </ListItemHolder>
  );
};
const ListItemHolder = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const ListPrimarySection = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
