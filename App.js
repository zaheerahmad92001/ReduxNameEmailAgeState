/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Test from './src/test';
import MainActivity from './src/MainActivity';

export class App extends Component {

  
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
    Home: MainActivity,
    test:Test,
  
  },
  {
    initialRouteName: "Home",
   

  }
);

export default AppContainer=  createAppContainer(AppNavigator)

