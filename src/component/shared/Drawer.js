import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {TextLg, TextNorm} from './text/Text';
import {COLOR_WHITE, FONT_WEIGHT_BOLD} from '../../constants/styles';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  URL_FEED,
  URL_LOGIN,
  URL_PROFILE,
  URL_SETTINGS,
  URL_USER_SPACE,
} from '../../constants/navigations';
import IconButton from './buttons/IconButton';
import {useNavigation} from '@react-navigation/native';

const Drawer = props => {
  // const navigation = useNavigation()
  return (
    <DrawerContentScrollView {...props}>
      <Holder>
        <IconWrapper>
          <IconButton onPress={() => props.navigation.closeDrawer()}>
            <Icon name={'arrow-left'} color={COLOR_WHITE} size={24} />
          </IconButton>
        </IconWrapper>
        <HeroImage source={require('../../assets/images/user.jpg')} />
        <TextLg weight={FONT_WEIGHT_BOLD}>Blanche Hall</TextLg>
        <ListSection>
          <ListItem label={'My Space'} name={URL_USER_SPACE} />
          <ListItem label={'My Profile'} name={URL_PROFILE} />
          <ListItem label={'My Topic'} name={URL_FEED} />
          <ListItem label={'Settings'} name={URL_SETTINGS} />
          <ListItem label={'Logout'} name={URL_LOGIN} />
        </ListSection>
      </Holder>
    </DrawerContentScrollView>
  );
};

export default Drawer;

const Holder = styled.View`
  flex: 1;
  align-items: center;
  padding-vertical: 20px;
`;

const IconWrapper = styled.View`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const HeroImage = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 65px;
  margin-bottom: 20px;
`;

const ListSection = styled.View`
  width: 100%;
  margin-top: 60px;
`;

const ListItemHolder = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const ListItem = ({label, name}) => {
  const navigation = useNavigation();
  const handlePush = () => {
    navigation.navigate(name);
  };
  return (
    <ListItemHolder onPress={handlePush}>
      <TextNorm color={COLOR_WHITE}>{label}</TextNorm>
      <Icon name={'chevron-right'} color={COLOR_WHITE} size={24} />
    </ListItemHolder>
  );
};
