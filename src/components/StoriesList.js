import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Thumbnail } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


type Props = {};
export default class StoriesList extends Component<Props> {
    constructor() {
      super()
      this.state = {
        dataSource: []
      }
    }

    componentDidMount(){
      const url = 'https://next.json-generator.com/api/json/get/V1HGd7LnV'
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }
    renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={{position: 'relative', flexDirection: 'column', alignItems: 'center'}}>
          <LinearGradient 
            start={{x: 1.0, y: 0.0}}
            end={{x: 1.0, y: 1.0 }}
            colors={['#c32aa3', '#4c5fd7', '#7232bd', '#f46f30', '#ffdc7d']} style={styles.borderGradient}>
          <Thumbnail style={styles.ThumbnailStories} 
            source={{uri: item.user.profile_picture}}/>
          </LinearGradient>
          <Text>{item.user.username}</Text>
        </TouchableOpacity>
      )
    }
    render() {
        return (
          <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7, marginBottom:5}}>
                <Text style={{fontWeight: 'bold'}}>Stories</Text>
                <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}}>
                    <Icon name="md-arrow-dropright" size={18}/>
                    <Text style={{fontWeight: 'bold'}}> Watch All</Text>
                </TouchableOpacity>
            </View>
            <View styles={{flex: 3,  }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingEnd: 10,
                  paddingStart: 10,
                }}
                >
                <TouchableOpacity style={{position: 'relative', flexDirection: 'column', alignItems: 'center'}}>
                  <Thumbnail style={styles.ThumbnailStoriesYou} 
                    source={require('../assets/user-1.jpg')}/>
                  <Text>You</Text>
                  <View style={styles.IconAdd}>
                    <Icon color="white"
                    name="md-add" size={15}/>
                  </View>
                </TouchableOpacity>
                <FlatList 
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={this.state.dataSource}
                  renderItem={this.renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              </ScrollView>
            </View>
          </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      borderBottomWidth: 1, 
      borderBottomColor: '#ddd',
      paddingVertical: 10,
  },
  IconAdd: {
    position: 'absolute',
    top: 35,
    left: 40,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderBottomWidth: 1.5,
    borderColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#449DD1'
  },
  ThumbnailStories: {
    marginHorizontal: 15,
    borderColor: 'white',
    borderWidth: 3,
  },
  ThumbnailStoriesYou: {
    marginHorizontal: 5,
  },
  borderGradient: {
    marginHorizontal: 12,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'

  }

});