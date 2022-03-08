import React from 'react';

import {
  URL_FEED,
  URL_FORUM_FEED,
  URL_POST,
  URL_SPACE_LIST,
} from '../constants/navigations';
import {
  COLOR_DARK,
  COLOR_SECONDARY,
  COLOR_TEXT_SECONDARY,
} from '../constants/styles';
import ForumFeedScreen from './../screens/ForumFeedScreen/ForumFeedScreen';
import FeedScreen from './../screens/FeedScreen/FeedScreen';
import SpaceListScreen from './../screens/SpaceListScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ForumIcon from '../component/shared/icon/ForumIcon';
import FeedIcon from '../component/shared/icon/FeedIcon';
import SpaceIcon from '../component/shared/icon/SpaceIcon';
import PostScreen from '../screens/PostScreen/PostScreen';
import PostIcon from '../component/shared/icon/PostIcon';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={URL_FEED}
      he
      screenOptions={({route}) => {
        let IconComponent;
        let label;

        switch (route.name) {
          case URL_FEED:
            IconComponent = FeedIcon;
            label = 'Feed';
            break;
          case URL_FORUM_FEED:
            IconComponent = ForumIcon;
            label = 'Forum Feed';
            break;
          case URL_POST:
            IconComponent = PostIcon;
            label = 'Post';
            break;
          case URL_SPACE_LIST:
            IconComponent = SpaceIcon;
            label = 'Space';
            break;

          default:
            IconComponent = FeedIcon;
        }
        console.log(label);
        return {
          tabBarLabel: label,
          tabBarIcon: ({focused, color, size}) => {
            return <IconComponent size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: COLOR_SECONDARY,
          tabBarInactiveTintColor: COLOR_TEXT_SECONDARY,
          tabBarLabelStyle: {fontSize: 13},
          tabBarIconStyle: {
            borderTop: COLOR_DARK,
          },
          tabBarStyle: {
            backgroundColor: COLOR_DARK,
            borderTopWidth: 0,
            height: 64,
            justifyContent: 'center',
            paddingTop: 8,
            paddingBottom: 8,
          },
        };
      }}>
      <Tab.Screen name={URL_FEED} component={FeedScreen} />
      <Tab.Screen name={URL_FORUM_FEED} component={ForumFeedScreen} />
      <Tab.Screen name={URL_POST} component={PostScreen} />
      <Tab.Screen name={URL_SPACE_LIST} component={SpaceListScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;
//
//
// const BottomNav = () => {
//     const navigation = useNavigation();
//     const {index, routes} = navigation.getState();
//     const routeName = routes[index].name;
//     return (
//         <Holder>
//             <NavButton
//                 label={'Feed'}
//                 icon={FeedIcon}
//                 active={FEED_URLS.find(url => url === routeName)}
//                 path={URL_FEED}
//             />
//             <NavButton
//                 label={'Forum'}
//                 icon={ForumIcon}
//                 path={URL_FORUM_FEED}
//                 active={FORUM_URLS.find(url => url === routeName)}
//             />
//             <NavButton label={'Post'} icon={PostIcon}/>
//             <NavButton label={'Notification'} icon={NotificationIcon}/>
//             <NavButton
//                 label={'Space'}
//                 icon={SpaceIcon}
//                 active={SPACE_URLS.find(url => url === routeName)}
//                 path={URL_SPACE_LIST}
//             />
//         </Holder>
//     );
// };
//
// export default BottomNav;
//
// const Holder = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   height: 64px;
//   background-color: ${COLOR_DARK};
//   width: 100%;
// `;
//
// const NavButton = ({icon: Icon, label, active, path}) => {
//     const color = active ? COLOR_SECONDARY : COLOR_TEXT_SECONDARY;
//     const navigation = useNavigation();
//     const handlePush = () => {
//         navigation.navigate(path);
//     };
//     return (
//         <Nav onPress={handlePush}>
//             <Icon color={color}/>
//             <TextXs
//                 color={color}
//                 style={{marginTop: 4}}
//                 weight={FONT_WEIGHT_SEMI_BOLD}>
//                 {label}
//             </TextXs>
//         </Nav>
//     );
// };
//
// const Nav = styled.TouchableOpacity`
//   flex: 1;
//   height: 100%;
//   align-items: center;
//   justify-content: center;
// `;
//
