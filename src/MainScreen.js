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
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { TabNavigator } from 'react-navigation';
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

type Props = {};
export default class MainScreen extends Component<Props> {
    static navigationOptions  = {
        headerLeft: <Icon style={{paddingLeft: 10}} name="md-camera" size={25}/>,
        title: 'Instagram',
        headerRight: <Icon style={{paddingRight: 10}} name="ios-send-outline" size={30}/>
    }
  render() {
    return (
      <AppTabNavigator/>
    );
  }
}

const AppTabNavigator = TabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
},
{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#dedede',
        showLabel: false,
        showIcon: true,
    }
})
const styles = StyleSheet.create({
  
});
