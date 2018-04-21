import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

type Props = {};
export default class HomeTab extends Component<Props> {
    static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-home" size={25} style={{color: tintColor}}/>
      )
    }
    render() {
        return (
          <View style={styles.container}>
            <Text>HomeTab</Text>
          </View>
        );
      }
}

const styles = StyleSheet.create({
  
});