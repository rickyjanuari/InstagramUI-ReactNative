import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

type Props = {};
export default class StoriesList extends Component<Props> {

    render() {
        return (
          <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7}}>
                <Text style={{fontWeight: 'bold'}}>Stories</Text>
                <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}}>
                    <Icon name="md-arrow-dropright" size={18}/>
                    <Text style={{fontWeight: 'bold'}}> Watch All</Text>
                </TouchableOpacity>
            </View>
          </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
});