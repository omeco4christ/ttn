import React from 'react';
import styled from '@emotion/native';
import {TextXs} from '../text/Text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  COLOR_DARK,
  COLOR_SECONDARY,
  COLOR_TEXT_SECONDARY,
  FONT_WEIGHT_SEMI_BOLD,
} from '../../../constants/styles';
import ForumIcon from '../icon/ForumIcon';
import FeedIcon from '../icon/FeedIcon';
import PostIcon from '../icon/PostIcon';
import NotificationIcon from '../icon/NotificationIcon';
import SpaceIcon from '../icon/SpaceIcon';
import {
  FEED_URLS,
  FORUM_URLS,
  SPACE_URLS,
  URL_FEED,
  URL_FORUM_FEED,
  URL_SPACE_LIST,
} from '../../../constants/navigations';
import {useNavigation} from '@react-navigation/native';

const BottomNav = () => {
  const navigation = useNavigation();
  const {index, routes} = navigation.getState();
  const routeName = routes[index].name;
  return (
    <Holder>
      <NavButton
        label={'Feed'}
        icon={FeedIcon}
        active={FEED_URLS.find(url => url === routeName)}
        path={URL_FEED}
      />
      <NavButton
        label={'Forum'}
        icon={ForumIcon}
        path={URL_FORUM_FEED}
        active={FORUM_URLS.find(url => url === routeName)}
      />
      <NavButton label={'Post'} icon={PostIcon} />
      <NavButton label={'Notification'} icon={NotificationIcon} />
      <NavButton
        label={'Space'}
        icon={SpaceIcon}
        active={SPACE_URLS.find(url => url === routeName)}
        path={URL_SPACE_LIST}
      />
    </Holder>
  );
};

export default BottomNav;

const Holder = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 64px;
  background-color: ${COLOR_DARK};
  width: 100%;
`;

const NavButton = ({icon: Icon, label, active, path}) => {
  const color = active ? COLOR_SECONDARY : COLOR_TEXT_SECONDARY;
  const navigation = useNavigation();
  const handlePush = () => {
    navigation.navigate(path);
  };
  return (
    <Nav onPress={handlePush}>
      <Icon color={color} />
      <TextXs
        color={color}
        style={{marginTop: 4}}
        weight={FONT_WEIGHT_SEMI_BOLD}>
        {label}
      </TextXs>
    </Nav>
  );
};

const Nav = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
