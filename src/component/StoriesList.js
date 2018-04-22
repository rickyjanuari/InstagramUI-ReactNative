import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,

} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Thumbnail } from 'native-base';

type Props = {};
export default class StoriesList extends Component<Props> {

    render() {
        return (
            <View style={{ height:110, borderBottomColor: '#eee', borderBottomWidth: 1 }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal:7, paddingVertical:7}}>
                <Text style={{fontWeight: 'bold'}}>Stories</Text>
                <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}}>
                    <Icon name="md-arrow-dropright" size={15}/>
                    <Text style={{fontWeight: 'bold'}}> Watch All</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 3}}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingEnd: 10,
                        paddingStart:10,
                    }}
                >

                    <TouchableOpacity style={{flexDirection: 'column', alignItems:'center'}}>
                        <Thumbnail style={styles.ThumbnailStoriesYou} source={require('../assets/user-1.jpg')}/>
                        <Text>You</Text>
                        <View style={styles.IconAdd}>
                        <Icon 
                            color="white"
                             name="md-add" size={15}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column', alignItems:'center'}}>
                        <Thumbnail style={styles.ThumbnailStories} source={require('../assets/user-7.png')}/>
                        <Text>mulyana</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column', alignItems:'center'}}>
                        <Thumbnail style={styles.ThumbnailStories} source={require('../assets/user-6.png')}/>
                        <Text>ayunda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column', alignItems:'center'}}>
                        <Thumbnail style={styles.ThumbnailStories} source={require('../assets/user-2.png')}/>
                        <Text>dhiar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column', alignItems:'center'}}>
                        <Thumbnail style={styles.ThumbnailStories} source={require('../assets/user-3.png')}/>
                        <Text>yudi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column', alignItems:'center'}}>
                        <Thumbnail style={styles.ThumbnailStories} source={require('../assets/user-4.png')}/>
                        <Text>rina</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: 'column', alignItems:'center'}}>
                        <Thumbnail style={styles.ThumbnailStories} source={require('../assets/user-5.png')}/>
                        <Text>chaeruluman</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
        );
      }
}

const styles = StyleSheet.create({
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
		marginHorizontal: 12,
		borderColor: 'pink',
		borderWidth: 3,
	},
	ThumbnailStoriesUnred: {
		marginHorizontal: 5,
		borderWidth: 2,
	}
});