import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  URL_CHANGE_PASSWORD,
  URL_CREATE_FORUM_POST,
  URL_FORGET_PASSWORD,
  URL_FORUM,
  URL_FORUM_LISTS,
  URL_LOGIN,
  URL_PROFILE,
  URL_RESET_PASSWORD,
  URL_RESET_PASSWORD_SUCCESS,
  URL_RESET_PASSWORD_TOKEN,
  URL_SETTINGS,
  URL_SIGN_UP,
  URL_SPACE,
  URL_SPACE_POST,
  URL_TOPIC,
  URL_USER_SPACE,
} from './src/constants/navigations';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';
import {COLOR_PRIMARY} from './src/constants/styles';
import ForumScreen from './src/screens/ForumScreen/ForumScreen';
import TopicScreen from './src/screens/TopicScreen/TopicScreen';
import ForumListScreen from './src/screens/ForumListScreen/ForumListScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserSpaceScreen from './src/screens/UserSpaceScreen';
import CustomDrawer from './src/component/shared/Drawer';
import SpaceScreen from './src/screens/SpaceScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SpaceShareScreen from './src/screens/SpaceShareScreen';
import ForumCreatePostScreen from './src/screens/ForumCreatePostScreen';
import TabStack from './src/stacks/TabStack';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import ResetPasswordTokenScreen from './src/screens/ResetPasswordTokenScreen';
import ResetPasswordSuccessScreen from './src/screens/ResetPasswordSuccessScreen';
import SettingScreen from './src/screens/SettingScreen';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import SplashScreen from './src/screens/SplashScreen';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
//
// const Drawer = createDrawerNavigator();
//
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={URL_USER_SPACE} component={UserSpaceScreen} />
      <Drawer.Screen name={URL_PROFILE} component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLOR_PRIMARY,
  },
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'splash'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Drawer'} component={DrawerNavigation} />
      <Stack.Screen name={'Tab'} component={TabStack} />
      <Stack.Screen name={'splash'} component={SplashScreen} />
      <Stack.Screen name={URL_LOGIN} component={LoginScreen} />
      <Stack.Screen name={URL_SIGN_UP} component={SignupScreen} />
      <Stack.Screen
        name={URL_FORGET_PASSWORD}
        component={ForgetPasswordScreen}
      />
      <Stack.Screen name={URL_RESET_PASSWORD} component={ResetPasswordScreen} />
      <Stack.Screen
        name={URL_RESET_PASSWORD_TOKEN}
        component={ResetPasswordTokenScreen}
      />
      <Stack.Screen
        name={URL_RESET_PASSWORD_SUCCESS}
        component={ResetPasswordSuccessScreen}
      />
      {/*<Stack.Screen name={URL_FEED} component={FeedScreen}/>*/}
      {/*<Stack.Screen name={URL_FORUM_FEED} component={ForumFeedScreen}/>*/}
      <Stack.Screen name={URL_TOPIC} component={TopicScreen} />
      <Stack.Screen name={URL_FORUM_LISTS} component={ForumListScreen} />
      <Stack.Screen name={URL_FORUM} component={ForumScreen} />
      {/*<Stack.Screen name={URL_SPACE_LIST} component={SpaceListScreen}/>*/}
      <Stack.Screen name={URL_SPACE} component={SpaceScreen} />
      <Stack.Screen name={URL_SPACE_POST} component={SpaceShareScreen} />
      <Stack.Screen
        name={URL_CREATE_FORUM_POST}
        component={ForumCreatePostScreen}
      />
    </Stack.Navigator>
  );
};

function Routes() {
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        // initialRouteName={URL_SETTINGS}
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerStyle: {
            width: '100%',
            backgroundColor: COLOR_PRIMARY,
          },
        }}>
        <Drawer.Screen
          name={'Main'}
          component={MainNavigation}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name={URL_USER_SPACE}
          component={UserSpaceScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name={URL_PROFILE}
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name={URL_SETTINGS}
          component={SettingScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          options={{headerShown: false}}
          name={URL_CHANGE_PASSWORD}
          component={ChangePasswordScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
