import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

type Props = {};
export default class LikesTab extends Component<Props> {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-heart" size={25} style={{color: tintColor}}/>
        )
    }
    render() {
        return (
          <View style={styles.container}>
            <Text>Likes Tab</Text>
          </View>
        );
      }
}

const styles = StyleSheet.create({
  
});