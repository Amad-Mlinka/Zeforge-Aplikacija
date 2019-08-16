import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Header } from 'react-native-elements';

export default function CalendarScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>;
}

CalendarScreen.navigationOptions = {
  title: 'Calendar',
};
