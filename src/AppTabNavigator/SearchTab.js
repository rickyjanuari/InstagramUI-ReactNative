import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

type Props = {};
export default class SearchTab extends Component<Props> {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" size={25} style={{color: tintColor}}/>
        )
    }
    render() {
        return (
          <View style={styles.container}>
            <Text>Search Tab</Text>
          </View>
        );
      }
}

const styles = StyleSheet.create({
  
});