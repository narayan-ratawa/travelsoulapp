/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';


import Login from './Screens/login.js';
import ListView from "./Screens/listView.js";
import Details from "./Screens/detailScreen.js";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const App = () => {
  
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ListView />
      </SafeAreaView>
    </Fragment>
  );
};

const LoginNavigator = createStackNavigator({
  Home: {
    screen: Login,
  },
});
const HomeNavigator = createStackNavigator({
  ListView: {
    screen: ListView
  },
  Details:{
    screen:Details
  }
});
const SwitchContainer =createSwitchNavigator(
  {
    LoginNavigator,
    HomeNavigator,
  },
  {
    initialRouteName: 'LoginNavigator',
  }
);

export default  appContainer = createAppContainer(SwitchContainer)
