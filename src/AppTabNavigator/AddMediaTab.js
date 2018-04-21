import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

type Props = {};
export default class AddMediaTab extends Component<Props> {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-add-circle" size={25} style={{color: tintColor}}/>
        )
    }
    render() {
        return (
          <View style={styles.container}>
            <Text>Add Media Tab</Text>
          </View>
        );
      }
}

const styles = StyleSheet.create({
  
});