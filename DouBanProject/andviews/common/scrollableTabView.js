/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   Image,
   View
 } from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

export default class TabTopView extends Component {
    render() {
        return (
            <ScrollableTabView
                style={styles.container}
                renderTabBar={() => <ScrollableTabBar />}
                tabBarPosition = "top"
                locked= { false }
                tabBarUnderlineStyle={styles.lineStyle}
               onChangeTab = {()=>{console.log(0)}}
                tabBarActiveTextColor='#FF0000'>
                 <View
                     tabLabel='娱乐0'
                 >
                     <Text>000000000000</Text>
                     <Text>11111111111111</Text>
                 </View>

                <Text style={styles.textStyle} tabLabel='科技1'>科技</Text>
                <Text style={styles.textStyle} tabLabel='军事2'>军事</Text>
                <Text style={styles.textStyle} tabLabel='体育3'>体育</Text>
                <Text style={styles.textStyle} tabLabel='娱乐0'>娱乐</Text>
                <Text style={styles.textStyle} tabLabel='科技1'>科技</Text>
                <Text style={styles.textStyle} tabLabel='军事2'>军事</Text>
                <Text style={styles.textStyle} tabLabel='体育3'>体育</Text>
            </ScrollableTabView>
        );
    }
    }


 const styles = StyleSheet.create({
     container: {
         flex: 1,
         marginTop: 20
     },
     lineStyle: {
         width:ScreenWidth/4,
         height: 2,
         backgroundColor: '#FF0000',
     },
     textStyle: {
         flex: 1,
         fontSize:20,
         marginTop:20,
         textAlign:'center',
     },

 });



