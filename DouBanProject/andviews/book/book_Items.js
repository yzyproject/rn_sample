import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default class row extends Component<{}> {
   constructor (props){
       super (props)

   }

    render (){
    let book = this.props.book
        return (
        <TouchableOpacity>
            <View>
                <Image source = { {uri:book.image} }></Image>
            </View>
            <View>
                <Text>{book.title}</Text>
                <Text>{book.publisher}</Text>
                <Text>{book.author}</Text>
            </View>
        </TouchableOpacity>

        )
    }
}

const styles=StyleSheet.create({

})
