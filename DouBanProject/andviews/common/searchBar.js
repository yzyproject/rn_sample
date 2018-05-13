import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class searchBar extends Component<{}> {
    render (){
        return (
            <View style = {styles.container}>
                <View style = {styles.inputContainer}>
                    <TextInput style = {styles.input} {...this.props} />
                </View>
                <TouchableOpacity {...this.props} style = {styles.btnContainer}  >
                    <Text style = { styles.btn }>搜索</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"flex-end",
        height:60,
        backgroundColor:"#fff",
        padding:10
    },
    inputContainer:{
        flex:1,
        height:40,

    },
    input:{
        borderWidth:1,
        borderColor:"#ccc",
        height:40,
        borderWidth:1,
        borderColor:"#ccc"
    },
    btnContainer:{
         width:80,
         height:40,
         backgroundColor:"green",
         justifyContent:"center",
         alignItems:"center"
    },
    btn:{

         color:"#fff",
         fontSize:18,
         textAlign:"center",

    }

})
