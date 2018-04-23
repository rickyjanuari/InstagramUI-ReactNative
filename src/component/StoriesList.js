import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Thumbnail } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
export default class StoriesList extends Component {

    constructor() {
        super()
        this.state = {
            dataSource: []
        }
    }
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{flexDirection: 'column', alignItems:'center'}}>
                <LinearGradient
                    colors={['#8a3ab9', '#4c68d7', '#cd486b', '#fbad50', '#fccc63', '#bc2a8d', '#e95950']}
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    style={styles.BorderGradient}
                >
                <Thumbnail style={styles.ThumbnailStories} source={{uri: item.user.profile_picture}}/>
                </LinearGradient>
                <Text>{item.user.username}</Text>
            </TouchableOpacity> 
        )
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
    render() {
        return (
            <View style={{flex:1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal:7, paddingVertical:7}}>
                <Text style={{fontWeight: 'bold'}}>Stories</Text>
                <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}}>
                    <Icon name="md-arrow-dropright" size={15}/>
                    <Text style={{fontWeight: 'bold'}}> Watch All</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 3, borderBottomWidth: 1.5, borderBottomColor: '#eee', paddingBottom: 5}}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingEnd: 10,
                        paddingStart:10,
                    }}
                >
                    <TouchableOpacity  style={{flexDirection: 'column', alignItems:'center'}}>
                        <Thumbnail style={styles.ThumbnailStoriesYou} source={require('../assets/user-1.jpg')}/>
                        <Text>You</Text>
                        <View style={styles.IconAdd}>
                        <Icon 
                            color="white"
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
    BorderGradient: {
        marginHorizontal: 12, 
        height: 60, 
        width: 60, 
        borderRadius: 30,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    IconAdd: {
		position: 'absolute',
		top: 40,
		left: 40,
		width: 20,
		height: 20,
		borderRadius: 20,
		borderWidth:1.5,
		borderColor:'white',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: '#449DD1'
    },
	ThumbnailStoriesYou: {
		marginRight: 10,
	},
	ThumbnailStories: {
		
		borderColor: 'white',
		borderWidth: 3,
	},
	ThumbnailStoriesUnred: {
		marginHorizontal: 5,
		borderWidth: 2,
	}
});