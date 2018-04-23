import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Container, Content } from 'native-base';
import StoriesList from '../components/StoriesList';
type Props = {};
export default class HomeTab extends Component<Props> {
    static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-home" size={25} style={{color: tintColor}}/>
      )
    }
    render() {
        return (
          <Container style={styles.container}>
            <Content>            
              <StoriesList/>
              
            </Content>
          </Container>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});