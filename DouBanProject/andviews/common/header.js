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

export default class header extends Component<{}> {
   constructor (props){
       super (props)
       this.backs = this.backs.bind(this)
   }

    backs (){
        this.props.navigator.pop();
    }
    render (){
        return (
            <View style = {styles.header}>
                <TouchableOpacity style = {styles.headerContainer} onPress = {() => {this.back}}>
                    <View style = {styles.backContainer}>
                        <Text style = {styles.titleleft}  >{this.props.initObj.backGame}</Text>
                    </View>
                    <View style = {styles.backTitle}>
                        <Text style = {styles.title}>{this.props.initObj.backTitle}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    header:{
        flexDirection:"row",
        height:50,
        backgroundColor:"green"
    },
    headerContainer:{
        flex:1,
        flexDirection:"row"
    },
    backContainer:{
        width:60,
        height:50,
        justifyContent:"center",
        alignItems:"center"
    },
    backTitle:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"#fff"
    },
    titleleft:{
        color:"#fff"
    }
})
