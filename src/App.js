/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = StackNavigator({
    Main: {
        screen: MainScreen
    }
})
const styles = StyleSheet.create({
  
});
