import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import MeetupsScreen from '../screens/MeetupsScreen';
import HammerITScreen from '../screens/HammerITScreen';
import ZeForgeLabScreen from '../screens/ZeForgeLabScreen';
import LetsTalkScreen from '../screens/LetsTalkScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const AboutUsStack = createStackNavigator(
  {
    AboutUs: AboutUsScreen,
  },
  config
);

AboutUsStack.navigationOptions = {
  tabBarLabel: 'About Us',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'} />
  ),
};

AboutUsStack.path = '';

const CalendarStack = createStackNavigator(
  {
    Calendar: CalendarScreen,
  },
  config
);

CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-grid' : 'md-grid'} />
  ),
};

CalendarStack.path = '';


const MeetupsStack = createStackNavigator(
  {
    Meetups: MeetupsScreen,
  },
  config
);

MeetupsStack.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'} />
  ),
};

MeetupsStack.path = '';


const HammerITStack = createStackNavigator(
  {
    HammerIT: HammerITScreen,
  },
  config
);

HammerITStack.navigationOptions = {
  tabBarLabel: 'HammerIT',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-hammer' : 'md-hammer'} />
  ),
};

HammerITStack.path = '';


const ZeForgeLabStack = createStackNavigator(
  {
    ZeForgeLab: ZeForgeLabScreen,
  },
  config
);

ZeForgeLabStack.navigationOptions = {
  tabBarLabel: 'ZeForge Lab',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-flask' : 'md-flask'} />
  ),
};

ZeForgeLabStack.path = '';


const LetsTalkStack = createStackNavigator(
  {
    LetsTalk: LetsTalkScreen,
  },
  config
);

LetsTalkStack.navigationOptions = {
  tabBarLabel: "Let's Talk",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'} />
  ),
};

LetsTalkStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AboutUsStack,
  CalendarStack,
  MeetupsStack,
  HammerITStack,
  ZeForgeLabStack,
  LetsTalkStack
});

tabNavigator.path = '';

export default tabNavigator;
